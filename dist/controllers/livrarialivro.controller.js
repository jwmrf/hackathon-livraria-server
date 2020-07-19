"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivrarialivroController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let LivrarialivroController = class LivrarialivroController {
    constructor(livrariaLivroRepository) {
        this.livrariaLivroRepository = livrariaLivroRepository;
    }
    async create(livrariaLivro) {
        return this.livrariaLivroRepository.create(livrariaLivro);
    }
    async count(where) {
        return this.livrariaLivroRepository.count(where);
    }
    async find(filter) {
        return this.livrariaLivroRepository.find(filter);
    }
    async updateAll(livrariaLivro, where) {
        return this.livrariaLivroRepository.updateAll(livrariaLivro, where);
    }
    async findById(id, filter) {
        return this.livrariaLivroRepository.findById(id, filter);
    }
    async updateById(id, livrariaLivro) {
        await this.livrariaLivroRepository.updateById(id, livrariaLivro);
    }
    async replaceById(id, livrariaLivro) {
        await this.livrariaLivroRepository.replaceById(id, livrariaLivro);
    }
    async deleteById(id) {
        await this.livrariaLivroRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/livraria-livros', {
        responses: {
            '200': {
                description: 'LivrariaLivro model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.LivrariaLivro) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.LivrariaLivro, {
                    title: 'NewLivrariaLivro',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LivrarialivroController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/livraria-livros/count', {
        responses: {
            '200': {
                description: 'LivrariaLivro model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.LivrariaLivro)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LivrarialivroController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/livraria-livros', {
        responses: {
            '200': {
                description: 'Array of LivrariaLivro model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.LivrariaLivro, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.LivrariaLivro)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LivrarialivroController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/livraria-livros', {
        responses: {
            '200': {
                description: 'LivrariaLivro PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.LivrariaLivro, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.LivrariaLivro)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.LivrariaLivro, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LivrarialivroController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/livraria-livros/{id}', {
        responses: {
            '200': {
                description: 'LivrariaLivro model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.LivrariaLivro, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.LivrariaLivro, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LivrarialivroController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/livraria-livros/{id}', {
        responses: {
            '204': {
                description: 'LivrariaLivro PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.LivrariaLivro, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.LivrariaLivro]),
    tslib_1.__metadata("design:returntype", Promise)
], LivrarialivroController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/livraria-livros/{id}', {
        responses: {
            '204': {
                description: 'LivrariaLivro PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.LivrariaLivro]),
    tslib_1.__metadata("design:returntype", Promise)
], LivrarialivroController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/livraria-livros/{id}', {
        responses: {
            '204': {
                description: 'LivrariaLivro DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], LivrarialivroController.prototype, "deleteById", null);
LivrarialivroController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.LivrariaLivroRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.LivrariaLivroRepository])
], LivrarialivroController);
exports.LivrarialivroController = LivrarialivroController;
//# sourceMappingURL=livrarialivro.controller.js.map