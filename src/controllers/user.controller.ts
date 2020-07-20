import {authenticate, TokenService, UserService} from '@loopback/authentication';
import {authorize} from '@loopback/authorization';
import {inject} from '@loopback/core';
import {model, property, repository} from '@loopback/repository';
import {del, get, HttpErrors, param, post, requestBody} from '@loopback/rest';
import {SecurityBindings, securityId, UserProfile} from '@loopback/security';
import _ from 'lodash';
import {PasswordHasherBindings, TokenServiceBindings, UserServiceBindings} from '../keys';
import {basicAuthorization} from '../middlewares/auth.midd';
import {User} from '../models';
import {ClienteGeneroRepository, ClienteRepository, Credentials, GeneroRepository, UserRepository} from '../repositories';
import {PasswordHasher, validateCredentials} from '../services';
import {CredentialsRequestBody, UserProfileSchema} from './specs/user-controller.specs';
const request_promise = require('request-promise');


@model()
export class NewUserRequest extends User {
  @property({
    type: 'string',
    required: true,
  })
  password: string;
}

export class UserController {
  constructor(
    @repository(UserRepository) public userRepository: UserRepository,
    @repository(GeneroRepository) public generoRepository: GeneroRepository,
    @repository(ClienteRepository) public clienteRepository: ClienteRepository,
    @repository(ClienteGeneroRepository) public clienteGeneroRepository: ClienteGeneroRepository,
    @inject(PasswordHasherBindings.PASSWORD_HASHER)
    public passwordHasher: PasswordHasher,
    @inject(TokenServiceBindings.TOKEN_SERVICE)
    public jwtService: TokenService,
    @inject(UserServiceBindings.USER_SERVICE)
    public userService: UserService<User, Credentials>,
  ) {
  }

  @post('/users/sign-up', {
    responses: {
      '200': {
        description: 'User',
        content: {
          'application/json': {
            schema: {
              'x-ts-type': User,
            },
          },
        },
      },
    },
  })
  async create(
    @requestBody(CredentialsRequestBody)
    newUserRequest: Credentials,
  ): Promise<User> {
    newUserRequest.role = 'user';

    // ensure a valid email value and password value
    validateCredentials(_.pick(newUserRequest, ['email', 'password']));

    // encrypt the password
    const password = await this.passwordHasher.hashPassword(
      newUserRequest.password,
    );

    try {
      // create the new user
      const savedUser = await this.userRepository.create(
        _.omit(newUserRequest, 'password'),
      );

      // set the password
      await this.userRepository
        .userCredentials(savedUser.id)
        .create({password});

      return savedUser;
    } catch (error) {
      // MongoError 11000 duplicate key
      if (error.code === 11000 && error.errmsg.includes('index: uniqueEmail')) {
        throw new HttpErrors.Conflict('Email value is already taken');
      } else {
        throw error;
      }
    }
  }

  @get('/users/{userId}', {
    responses: {
      '200': {
        description: 'User',
        content: {
          'application/json': {
            schema: {
              'x-ts-type': User,
            },
          },
        },
      },
    },
  })
  @authenticate('jwt')
  @authorize({
    allowedRoles: ['admin'],
    voters: [basicAuthorization],
  })
  async findById(@param.path.string('userId') userId: string): Promise<User> {
    return this.userRepository.findById(userId);
  }

  @get('/users/me', {
    responses: {
      '200': {
        description: 'The current user profile',
        content: {
          'application/json': {
            schema: UserProfileSchema,
          },
        },
      },
    },
  })
  @authenticate('jwt')
  async printCurrentUser(
    @inject(SecurityBindings.USER)
    currentUserProfile: UserProfile,
  ): Promise<User> {

    const userId = currentUserProfile[securityId];
    return this.userRepository.findById(userId);
  }

  @post('/users/login', {
    responses: {
      '200': {
        description: 'Token',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                token: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
    },
  })
  async login(
    @requestBody(CredentialsRequestBody) credentials: Credentials,
  ): Promise<{token: string}> {
    // ensure the user exists, and the password is correct
    const user = await this.userService.verifyCredentials(credentials);

    // convert a User object into a UserProfile object (reduced set of properties)
    const userProfile = this.userService.convertToUserProfile(user);

    // create a JSON Web Token based on the user profile
    const token = await this.jwtService.generateToken(userProfile);

    return {token};
  }
  @get('/usersall', {
    responses: {
      '200': {
        description: 'User DELETE success',
      },
    },
  })
  async getAll(): Promise<any> {
    return await this.userRepository.find({fields: {id: true}});
  }

  @del('/user/{id}', {
    responses: {
      '204': {
        description: 'User DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.userRepository.deleteById(id);
  }


  @post('/users/whats', {
    responses: {
      '200': {
        description: 'Receive whatsapp message',
      },
    },
  })
  async whastsapp(
    @requestBody({
      content: {
        'application/json': {
        },
      },
    })
    whatsapp: any,
  ): Promise<any> {
    const token = 'WNStZoqjzS7hRAJVDZAzDCq28K5cSbyrZKjq'
    var name = "Fulano"
    var mensagemRetorno = "Eu sou assistente virtual."
    var mensagemUsuario = ""
    var telefoneRetorno = ""
    var usuarioInformouCategoria = undefined
    if (whatsapp.message) {
      if (whatsapp.message.contents && whatsapp.message.contents[0] && whatsapp.message.contents[0].text) {
        mensagemUsuario = (whatsapp.message.contents[0].text).toLowerCase()
        usuarioInformouCategoria = await this.generoRepository.findOne({where: {tipo: mensagemUsuario}})
      }
      if (whatsapp.message.visitor) {
        if (whatsapp.message.visitor.name) {
          name = whatsapp.message.visitor.name
        }
      }
      if (whatsapp.message.from) {
        let telefone = whatsapp.message.from
        telefoneRetorno = telefone
        var existeCliente = await this.clienteRepository.findOne({where: {telefone: telefone}})
        if (existeCliente) {
          var possuiGeneros = await this.clienteGeneroRepository.find({where: {cliente_id: existeCliente.id}})
          if (possuiGeneros[0]) {
            mensagemRetorno = "Você gostaria de receber o texto em áudio?"
          } else {
            if (usuarioInformouCategoria) {
              await this.clienteGeneroRepository.create({cliente_id: existeCliente.id, genero_id: usuarioInformouCategoria.id})
              mensagemRetorno = "Você gostaria de receber o texto em áudio?"
            } else {
              mensagemRetorno = "Você ainda não nos informou nenhum gênero escolhido, de qual tipo de livro você gosta?"
            }
          }
        } else {
          await this.clienteRepository.create({telefone: telefone})
        }
      }
    }
    request_promise.post({
      uri: 'https://api.zenvia.com/v1/channels/whatsapp/messages',
      headers: {
        'X-API-TOKEN': token
      },
      body: {
        from: 'octagonal-popcorn',
        to: telefoneRetorno,
        contents: [{
          type: 'text',
          text: `Olá ${name},` + mensagemRetorno
        }]
      },
      json: true
    })
      .then((response: any) => {
        console.log('Response:', response);
      })
      .catch((error: any) => {
        console.log('Error:', error);
      });
  }
}

