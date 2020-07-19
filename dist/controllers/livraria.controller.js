"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivrariaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let LivrariaController = class LivrariaController {
    constructor(livrariaRepository) {
        this.livrariaRepository = livrariaRepository;
    }
    async create(livraria) {
        return this.livrariaRepository.create(livraria);
    }
    async count(where) {
        return this.livrariaRepository.count(where);
    }
    async find(filter) {
        return this.livrariaRepository.find(filter);
    }
    async updateAll(livraria, where) {
        return this.livrariaRepository.updateAll(livraria, where);
    }
    async findById(id, filter) {
        return this.livrariaRepository.findById(id, filter);
    }
    async updateById(id, livraria) {
        await this.livrariaRepository.updateById(id, livraria);
    }
    async replaceById(id, livraria) {
        await this.livrariaRepository.replaceById(id, livraria);
    }
    async deleteById(id) {
        await this.livrariaRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/livrarias', {
        responses: {
            '200': {
                description: 'Livraria model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Livraria) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Livraria, {
                    title: 'NewLivraria',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LivrariaController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/livrarias/count', {
        responses: {
            '200': {
                description: 'Livraria model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Livraria)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LivrariaController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/livrarias', {
        responses: {
            '200': {
                description: 'Array of Livraria model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Livraria, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Livraria)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LivrariaController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/livrarias', {
        responses: {
            '200': {
                description: 'Livraria PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Livraria, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Livraria)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Livraria, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LivrariaController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/livrarias/{id}', {
        responses: {
            '200': {
                description: 'Livraria model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Livraria, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Livraria, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LivrariaController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/livrarias/{id}', {
        responses: {
            '204': {
                description: 'Livraria PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Livraria, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Livraria]),
    tslib_1.__metadata("design:returntype", Promise)
], LivrariaController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/livrarias/{id}', {
        responses: {
            '204': {
                description: 'Livraria PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Livraria]),
    tslib_1.__metadata("design:returntype", Promise)
], LivrariaController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/livrarias/{id}', {
        responses: {
            '204': {
                description: 'Livraria DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], LivrariaController.prototype, "deleteById", null);
LivrariaController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.LivrariaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.LivrariaRepository])
], LivrariaController);
exports.LivrariaController = LivrariaController;
//# sourceMappingURL=livraria.controller.js.map