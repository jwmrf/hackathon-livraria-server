"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = exports.NewUserRequest = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const authorization_1 = require("@loopback/authorization");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const security_1 = require("@loopback/security");
const lodash_1 = tslib_1.__importDefault(require("lodash"));
const keys_1 = require("../keys");
const auth_midd_1 = require("../middlewares/auth.midd");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const services_1 = require("../services");
const user_controller_specs_1 = require("./specs/user-controller.specs");
const request_promise = require('request-promise');
let NewUserRequest = class NewUserRequest extends models_1.User {
};
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], NewUserRequest.prototype, "password", void 0);
NewUserRequest = tslib_1.__decorate([
    repository_1.model()
], NewUserRequest);
exports.NewUserRequest = NewUserRequest;
let UserController = class UserController {
    constructor(userRepository, generoRepository, clienteRepository, clienteGeneroRepository, livroGeneroRepository, livroRepository, livrariaLivroRepository, livrariaRepository, passwordHasher, jwtService, userService) {
        this.userRepository = userRepository;
        this.generoRepository = generoRepository;
        this.clienteRepository = clienteRepository;
        this.clienteGeneroRepository = clienteGeneroRepository;
        this.livroGeneroRepository = livroGeneroRepository;
        this.livroRepository = livroRepository;
        this.livrariaLivroRepository = livrariaLivroRepository;
        this.livrariaRepository = livrariaRepository;
        this.passwordHasher = passwordHasher;
        this.jwtService = jwtService;
        this.userService = userService;
    }
    async create(newUserRequest) {
        newUserRequest.role = 'user';
        // ensure a valid email value and password value
        services_1.validateCredentials(lodash_1.default.pick(newUserRequest, ['email', 'password']));
        // encrypt the password
        const password = await this.passwordHasher.hashPassword(newUserRequest.password);
        try {
            // create the new user
            const savedUser = await this.userRepository.create(lodash_1.default.omit(newUserRequest, 'password'));
            // set the password
            await this.userRepository
                .userCredentials(savedUser.id)
                .create({ password });
            return savedUser;
        }
        catch (error) {
            // MongoError 11000 duplicate key
            if (error.code === 11000 && error.errmsg.includes('index: uniqueEmail')) {
                throw new rest_1.HttpErrors.Conflict('Email value is already taken');
            }
            else {
                throw error;
            }
        }
    }
    async findById(userId) {
        return this.userRepository.findById(userId);
    }
    async printCurrentUser(currentUserProfile) {
        const userId = currentUserProfile[security_1.securityId];
        return this.userRepository.findById(userId);
    }
    async login(credentials) {
        // ensure the user exists, and the password is correct
        const user = await this.userService.verifyCredentials(credentials);
        // convert a User object into a UserProfile object (reduced set of properties)
        const userProfile = this.userService.convertToUserProfile(user);
        // create a JSON Web Token based on the user profile
        const token = await this.jwtService.generateToken(userProfile);
        return { token };
    }
    async getAll() {
        return await this.userRepository.find({ fields: { id: true } });
    }
    async deleteById(id) {
        await this.userRepository.deleteById(id);
    }
    async whastsapp(whatsapp) {
        const token = 'WNStZoqjzS7hRAJVDZAzDCq28K5cSbyrZKjq';
        var name = "Fulano";
        var mensagemRetorno = " Eu sou assistente virtual.";
        var mensagemUsuario = "";
        var telefoneRetorno = "";
        var usuarioInformouCategoria = await this.generoRepository.findOne({ where: { tipo: "teste" } });
        var flagSendLivro = false;
        var flagCategoria = false;
        var livraria = await this.livrariaRepository.findOne();
        var livro = await this.livroRepository.findOne();
        if (whatsapp.message) {
            if (whatsapp.message.contents && whatsapp.message.contents[0] && whatsapp.message.contents[0].text) {
                mensagemUsuario = (whatsapp.message.contents[0].text).toLowerCase();
                console.log(mensagemUsuario);
                usuarioInformouCategoria = await this.generoRepository.findOne({ where: { tipo: mensagemUsuario } });
                if (usuarioInformouCategoria) {
                    flagCategoria = true;
                }
            }
            if (whatsapp.message.visitor) {
                if (whatsapp.message.visitor.name) {
                    name = whatsapp.message.visitor.name;
                }
            }
            if (whatsapp.message.from) {
                let telefone = whatsapp.message.from;
                telefoneRetorno = telefone;
                var existeCliente = await this.clienteRepository.findOne({ where: { telefone: telefone } });
                if (existeCliente) {
                    if (whatsapp.message.contents && whatsapp.message.contents[0] && whatsapp.message.contents[0].text) {
                        mensagemUsuario = (whatsapp.message.contents[0].text).toLowerCase();
                        usuarioInformouCategoria = await this.generoRepository.findOne({ where: { tipo: mensagemUsuario } });
                        if (usuarioInformouCategoria) {
                            flagCategoria = true;
                        }
                    }
                    var possuiGeneros = await this.clienteGeneroRepository.findOne({ where: { cliente_id: existeCliente.id } });
                    if (possuiGeneros) {
                        mensagemRetorno = " Você gostaria de receber o texto em áudio?";
                        if (mensagemUsuario == "não" || mensagemUsuario == "nao") {
                            flagSendLivro = true;
                            let livrogenero = await this.livroGeneroRepository.findOne({ where: { genero_id: possuiGeneros.genero_id } });
                            if (livrogenero) {
                                livro = await this.livroRepository.findById(livrogenero.livro_id);
                                livraria = await this.livrariaRepository.findOne();
                                mensagemRetorno = " Encontramos um livro ótimo para você na livraria : " + (livraria === null || livraria === void 0 ? void 0 : livraria.nome);
                            }
                        }
                    }
                    else {
                        if (flagCategoria) {
                            mensagemRetorno = " Você gostaria de receber o texto em áudio?";
                            await this.clienteGeneroRepository.create({ cliente_id: existeCliente.id, genero_id: (usuarioInformouCategoria) ? usuarioInformouCategoria.id : "fc2d1e7c-0b70-4f93-99f5-bbaa058ed795" });
                        }
                        else {
                            mensagemRetorno = " Você ainda não nos informou nenhum gênero escolhido, de qual tipo de livro você gosta?";
                        }
                    }
                }
                else {
                    await this.clienteRepository.create({ telefone: telefone });
                }
            }
        }
        setTimeout(() => {
            /*
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
      
      
                */
        }, 500);
    }
};
tslib_1.__decorate([
    rest_1.post('/users/sign-up', {
        responses: {
            '200': {
                description: 'User',
                content: {
                    'application/json': {
                        schema: {
                            'x-ts-type': models_1.User,
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody(user_controller_specs_1.CredentialsRequestBody)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/users/{userId}', {
        responses: {
            '200': {
                description: 'User',
                content: {
                    'application/json': {
                        schema: {
                            'x-ts-type': models_1.User,
                        },
                    },
                },
            },
        },
    }),
    authentication_1.authenticate('jwt'),
    authorization_1.authorize({
        allowedRoles: ['admin'],
        voters: [auth_midd_1.basicAuthorization],
    }),
    tslib_1.__param(0, rest_1.param.path.string('userId')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.get('/users/me', {
        responses: {
            '200': {
                description: 'The current user profile',
                content: {
                    'application/json': {
                        schema: user_controller_specs_1.UserProfileSchema,
                    },
                },
            },
        },
    }),
    authentication_1.authenticate('jwt'),
    tslib_1.__param(0, core_1.inject(security_1.SecurityBindings.USER)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "printCurrentUser", null);
tslib_1.__decorate([
    rest_1.post('/users/login', {
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
    }),
    tslib_1.__param(0, rest_1.requestBody(user_controller_specs_1.CredentialsRequestBody)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
tslib_1.__decorate([
    rest_1.get('/usersall', {
        responses: {
            '200': {
                description: 'User DELETE success',
            },
        },
    }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "getAll", null);
tslib_1.__decorate([
    rest_1.del('/user/{id}', {
        responses: {
            '204': {
                description: 'User DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "deleteById", null);
tslib_1.__decorate([
    rest_1.post('/users/whats', {
        responses: {
            '200': {
                description: 'Receive whatsapp message',
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {},
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "whastsapp", null);
UserController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.UserRepository)),
    tslib_1.__param(1, repository_1.repository(repositories_1.GeneroRepository)),
    tslib_1.__param(2, repository_1.repository(repositories_1.ClienteRepository)),
    tslib_1.__param(3, repository_1.repository(repositories_1.ClienteGeneroRepository)),
    tslib_1.__param(4, repository_1.repository(repositories_1.LivroGeneroRepository)),
    tslib_1.__param(5, repository_1.repository(repositories_1.LivroRepository)),
    tslib_1.__param(6, repository_1.repository(repositories_1.LivrariaLivroRepository)),
    tslib_1.__param(7, repository_1.repository(repositories_1.LivrariaRepository)),
    tslib_1.__param(8, core_1.inject(keys_1.PasswordHasherBindings.PASSWORD_HASHER)),
    tslib_1.__param(9, core_1.inject(keys_1.TokenServiceBindings.TOKEN_SERVICE)),
    tslib_1.__param(10, core_1.inject(keys_1.UserServiceBindings.USER_SERVICE)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UserRepository,
        repositories_1.GeneroRepository,
        repositories_1.ClienteRepository,
        repositories_1.ClienteGeneroRepository,
        repositories_1.LivroGeneroRepository,
        repositories_1.LivroRepository,
        repositories_1.LivrariaLivroRepository,
        repositories_1.LivrariaRepository, Object, Object, Object])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map