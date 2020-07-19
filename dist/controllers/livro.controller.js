"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivroController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let LivroController = class LivroController {
    constructor(livroRepository) {
        this.livroRepository = livroRepository;
    }
    async create(livro) {
        return this.livroRepository.create(livro);
    }
    async count(where) {
        return this.livroRepository.count(where);
    }
    async find(filter) {
        return this.livroRepository.find(filter);
    }
    async updateAll(livro, where) {
        return this.livroRepository.updateAll(livro, where);
    }
    async findById(id, filter) {
        return this.livroRepository.findById(id, filter);
    }
    async updateById(id, livro) {
        await this.livroRepository.updateById(id, livro);
    }
    async replaceById(id, livro) {
        await this.livroRepository.replaceById(id, livro);
    }
    async deleteById(id) {
        await this.livroRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/livros', {
        responses: {
            '200': {
                description: 'Livro model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Livro) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Livro, {
                    title: 'NewLivro',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LivroController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/livros/count', {
        responses: {
            '200': {
                description: 'Livro model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Livro)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LivroController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/livros', {
        responses: {
            '200': {
                description: 'Array of Livro model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Livro, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Livro)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LivroController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/livros', {
        responses: {
            '200': {
                description: 'Livro PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Livro, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Livro)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Livro, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LivroController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/livros/{id}', {
        responses: {
            '200': {
                description: 'Livro model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Livro, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Livro, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LivroController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/livros/{id}', {
        responses: {
            '204': {
                description: 'Livro PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Livro, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Livro]),
    tslib_1.__metadata("design:returntype", Promise)
], LivroController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/livros/{id}', {
        responses: {
            '204': {
                description: 'Livro PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Livro]),
    tslib_1.__metadata("design:returntype", Promise)
], LivroController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/livros/{id}', {
        responses: {
            '204': {
                description: 'Livro DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], LivroController.prototype, "deleteById", null);
LivroController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.LivroRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.LivroRepository])
], LivroController);
exports.LivroController = LivroController;
//# sourceMappingURL=livro.controller.js.map