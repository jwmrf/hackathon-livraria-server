"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecomendacaoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let RecomendacaoController = class RecomendacaoController {
    constructor(recomendacaoRepository) {
        this.recomendacaoRepository = recomendacaoRepository;
    }
    async create(recomendacao) {
        return this.recomendacaoRepository.create(recomendacao);
    }
    async count(where) {
        return this.recomendacaoRepository.count(where);
    }
    async find(filter) {
        return this.recomendacaoRepository.find(filter);
    }
    async updateAll(recomendacao, where) {
        return this.recomendacaoRepository.updateAll(recomendacao, where);
    }
    async findById(id, filter) {
        return this.recomendacaoRepository.findById(id, filter);
    }
    async updateById(id, recomendacao) {
        await this.recomendacaoRepository.updateById(id, recomendacao);
    }
    async replaceById(id, recomendacao) {
        await this.recomendacaoRepository.replaceById(id, recomendacao);
    }
    async deleteById(id) {
        await this.recomendacaoRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/recomendacoes', {
        responses: {
            '200': {
                description: 'Recomendacao model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Recomendacao) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Recomendacao, {
                    title: 'NewRecomendacao',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RecomendacaoController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/recomendacoes/count', {
        responses: {
            '200': {
                description: 'Recomendacao model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Recomendacao)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RecomendacaoController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/recomendacoes', {
        responses: {
            '200': {
                description: 'Array of Recomendacao model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Recomendacao, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Recomendacao)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RecomendacaoController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/recomendacoes', {
        responses: {
            '200': {
                description: 'Recomendacao PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Recomendacao, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Recomendacao)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Recomendacao, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RecomendacaoController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/recomendacoes/{id}', {
        responses: {
            '200': {
                description: 'Recomendacao model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Recomendacao, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Recomendacao, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RecomendacaoController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/recomendacoes/{id}', {
        responses: {
            '204': {
                description: 'Recomendacao PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Recomendacao, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Recomendacao]),
    tslib_1.__metadata("design:returntype", Promise)
], RecomendacaoController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/recomendacoes/{id}', {
        responses: {
            '204': {
                description: 'Recomendacao PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Recomendacao]),
    tslib_1.__metadata("design:returntype", Promise)
], RecomendacaoController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/recomendacoes/{id}', {
        responses: {
            '204': {
                description: 'Recomendacao DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], RecomendacaoController.prototype, "deleteById", null);
RecomendacaoController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.RecomendacaoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.RecomendacaoRepository])
], RecomendacaoController);
exports.RecomendacaoController = RecomendacaoController;
//# sourceMappingURL=recomendacao.controller.js.map