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
import {ClienteGeneroRepository, ClienteRepository, Credentials, GeneroRepository, LivrariaLivroRepository, LivrariaRepository, LivroGeneroRepository, LivroRepository, UserRepository} from '../repositories';
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
    @repository(LivroGeneroRepository) public livroGeneroRepository: LivroGeneroRepository,
    @repository(LivroRepository) public livroRepository: LivroRepository,
    @repository(LivrariaLivroRepository) public livrariaLivroRepository: LivrariaLivroRepository,
    @repository(LivrariaRepository) public livrariaRepository: LivrariaRepository,
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
    var mensagemRetorno = " Eu sou assistente virtual."
    var mensagemUsuario = ""
    var telefoneRetorno = ""
    var usuarioInformouCategoria = await this.generoRepository.findOne({where: {tipo: "teste"}})
    var flagSendLivro = false
    var flagCategoria = false;
    var livraria = await this.livrariaRepository.findOne()
    var livro = await this.livroRepository.findOne()
    if (whatsapp.message) {
      if (whatsapp.message.contents && whatsapp.message.contents[0] && whatsapp.message.contents[0].text) {
        mensagemUsuario = (whatsapp.message.contents[0].text).toLowerCase()
        console.log(mensagemUsuario)
        usuarioInformouCategoria = await this.generoRepository.findOne({where: {tipo: mensagemUsuario}})
        if (usuarioInformouCategoria) {
          flagCategoria = true;
        }


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
          if (whatsapp.message.contents && whatsapp.message.contents[0] && whatsapp.message.contents[0].text) {
            mensagemUsuario = (whatsapp.message.contents[0].text).toLowerCase()
            usuarioInformouCategoria = await this.generoRepository.findOne({where: {tipo: mensagemUsuario}})
            if (usuarioInformouCategoria) {
              flagCategoria = true;
            }
          }
          var possuiGeneros = await this.clienteGeneroRepository.findOne({where: {cliente_id: existeCliente.id}})
          if (possuiGeneros) {
            mensagemRetorno = " Você gostaria de receber o texto em áudio?"
            if (mensagemUsuario == "não" || mensagemUsuario == "nao") {
              flagSendLivro = true;
              let livrogenero = await this.livroGeneroRepository.findOne({where: {genero_id: possuiGeneros.genero_id}});
              if (livrogenero) {
                livro = await this.livroRepository.findById(livrogenero.livro_id)
                livraria = await this.livrariaRepository.findOne()
                mensagemRetorno = " Encontramos um livro ótimo para você na livraria : " + livraria?.nome;
              }
            }
          } else {
            if (flagCategoria) {
              mensagemRetorno = " Você gostaria de receber o texto em áudio?"
              await this.clienteGeneroRepository.create({cliente_id: existeCliente.id, genero_id: (usuarioInformouCategoria) ? usuarioInformouCategoria.id : "fc2d1e7c-0b70-4f93-99f5-bbaa058ed795"})
            } else {
              mensagemRetorno = " Você ainda não nos informou nenhum gênero escolhido, de qual tipo de livro você gosta?"
            }
          }
        } else {
          await this.clienteRepository.create({telefone: telefone})
        }
      }
    }
    setTimeout(() => {

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
          /// Momento de enviar o livro ao usuário
          if (flagSendLivro && livro) {
            request_promise.post({
              uri: 'https://api.zenvia.com/v1/channels/whatsapp/messages',
              headers: {
                'X-API-TOKEN': token
              },
              body: {
                from: 'octagonal-popcorn',
                to: telefoneRetorno,
                contents: [{
                  type: 'file',
                  fileUrl: livro.img_url,
                  fileCaption: livro.sinopse
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
        })
        .catch((error: any) => {
          console.log('Error:', error);
        });



    }, 500)
  }
}

