"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivrogeneroController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let LivrogeneroController = class LivrogeneroController {
    constructor(livroGeneroRepository) {
        this.livroGeneroRepository = livroGeneroRepository;
    }
    async create(livroGenero) {
        return this.livroGeneroRepository.create(livroGenero);
    }
    async count(where) {
        return this.livroGeneroRepository.count(where);
    }
    async find(filter) {
        return this.livroGeneroRepository.find(filter);
    }
    async updateAll(livroGenero, where) {
        return this.livroGeneroRepository.updateAll(livroGenero, where);
    }
    async findById(id, filter) {
        return this.livroGeneroRepository.findById(id, filter);
    }
    async updateById(id, livroGenero) {
        await this.livroGeneroRepository.updateById(id, livroGenero);
    }
    async replaceById(id, livroGenero) {
        await this.livroGeneroRepository.replaceById(id, livroGenero);
    }
    async deleteById(id) {
        await this.livroGeneroRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/livro-generos', {
        responses: {
            '200': {
                description: 'LivroGenero model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.LivroGenero) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.LivroGenero, {
                    title: 'NewLivroGenero',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LivrogeneroController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/livro-generos/count', {
        responses: {
            '200': {
                description: 'LivroGenero model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.LivroGenero)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LivrogeneroController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/livro-generos', {
        responses: {
            '200': {
                description: 'Array of LivroGenero model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.LivroGenero, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.LivroGenero)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LivrogeneroController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/livro-generos', {
        responses: {
            '200': {
                description: 'LivroGenero PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.LivroGenero, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.LivroGenero)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.LivroGenero, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LivrogeneroController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/livro-generos/{id}', {
        responses: {
            '200': {
                description: 'LivroGenero model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.LivroGenero, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.LivroGenero, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LivrogeneroController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/livro-generos/{id}', {
        responses: {
            '204': {
                description: 'LivroGenero PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.LivroGenero, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.LivroGenero]),
    tslib_1.__metadata("design:returntype", Promise)
], LivrogeneroController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/livro-generos/{id}', {
        responses: {
            '204': {
                description: 'LivroGenero PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.LivroGenero]),
    tslib_1.__metadata("design:returntype", Promise)
], LivrogeneroController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/livro-generos/{id}', {
        responses: {
            '204': {
                description: 'LivroGenero DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], LivrogeneroController.prototype, "deleteById", null);
LivrogeneroController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.LivroGeneroRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.LivroGeneroRepository])
], LivrogeneroController);
exports.LivrogeneroController = LivrogeneroController;
//# sourceMappingURL=livrogenero.controller.js.map