"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientegeneroController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ClientegeneroController = class ClientegeneroController {
    constructor(clienteGeneroRepository) {
        this.clienteGeneroRepository = clienteGeneroRepository;
    }
    async create(clienteGenero) {
        return this.clienteGeneroRepository.create(clienteGenero);
    }
    async count(where) {
        return this.clienteGeneroRepository.count(where);
    }
    async find(filter) {
        return this.clienteGeneroRepository.find(filter);
    }
    async updateAll(clienteGenero, where) {
        return this.clienteGeneroRepository.updateAll(clienteGenero, where);
    }
    async findById(id, filter) {
        return this.clienteGeneroRepository.findById(id, filter);
    }
    async updateById(id, clienteGenero) {
        await this.clienteGeneroRepository.updateById(id, clienteGenero);
    }
    async replaceById(id, clienteGenero) {
        await this.clienteGeneroRepository.replaceById(id, clienteGenero);
    }
    async deleteById(id) {
        await this.clienteGeneroRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/cliente-generos', {
        responses: {
            '200': {
                description: 'ClienteGenero model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.ClienteGenero) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.ClienteGenero, {
                    title: 'NewClienteGenero',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientegeneroController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/cliente-generos/count', {
        responses: {
            '200': {
                description: 'ClienteGenero model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.ClienteGenero)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientegeneroController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/cliente-generos', {
        responses: {
            '200': {
                description: 'Array of ClienteGenero model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.ClienteGenero, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.ClienteGenero)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientegeneroController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/cliente-generos', {
        responses: {
            '200': {
                description: 'ClienteGenero PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.ClienteGenero, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.ClienteGenero)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.ClienteGenero, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientegeneroController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/cliente-generos/{id}', {
        responses: {
            '200': {
                description: 'ClienteGenero model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.ClienteGenero, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.ClienteGenero, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientegeneroController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/cliente-generos/{id}', {
        responses: {
            '204': {
                description: 'ClienteGenero PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.ClienteGenero, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.ClienteGenero]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientegeneroController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/cliente-generos/{id}', {
        responses: {
            '204': {
                description: 'ClienteGenero PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.ClienteGenero]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientegeneroController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/cliente-generos/{id}', {
        responses: {
            '204': {
                description: 'ClienteGenero DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientegeneroController.prototype, "deleteById", null);
ClientegeneroController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.ClienteGeneroRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ClienteGeneroRepository])
], ClientegeneroController);
exports.ClientegeneroController = ClientegeneroController;
//# sourceMappingURL=clientegenero.controller.js.map