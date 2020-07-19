"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneroController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let GeneroController = class GeneroController {
    constructor(generoRepository) {
        this.generoRepository = generoRepository;
    }
    async create(genero) {
        return this.generoRepository.create(genero);
    }
    async count(where) {
        return this.generoRepository.count(where);
    }
    async find(filter) {
        return this.generoRepository.find(filter);
    }
    async updateAll(genero, where) {
        return this.generoRepository.updateAll(genero, where);
    }
    async findById(id, filter) {
        return this.generoRepository.findById(id, filter);
    }
    async updateById(id, genero) {
        await this.generoRepository.updateById(id, genero);
    }
    async replaceById(id, genero) {
        await this.generoRepository.replaceById(id, genero);
    }
    async deleteById(id) {
        await this.generoRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/generos', {
        responses: {
            '200': {
                description: 'Genero model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Genero) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Genero, {
                    title: 'NewGenero',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GeneroController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/generos/count', {
        responses: {
            '200': {
                description: 'Genero model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Genero)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GeneroController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/generos', {
        responses: {
            '200': {
                description: 'Array of Genero model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Genero, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Genero)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GeneroController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/generos', {
        responses: {
            '200': {
                description: 'Genero PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Genero, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Genero)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Genero, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GeneroController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/generos/{id}', {
        responses: {
            '200': {
                description: 'Genero model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Genero, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Genero, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GeneroController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/generos/{id}', {
        responses: {
            '204': {
                description: 'Genero PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Genero, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Genero]),
    tslib_1.__metadata("design:returntype", Promise)
], GeneroController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/generos/{id}', {
        responses: {
            '204': {
                description: 'Genero PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Genero]),
    tslib_1.__metadata("design:returntype", Promise)
], GeneroController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/generos/{id}', {
        responses: {
            '204': {
                description: 'Genero DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], GeneroController.prototype, "deleteById", null);
GeneroController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.GeneroRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.GeneroRepository])
], GeneroController);
exports.GeneroController = GeneroController;
//# sourceMappingURL=genero.controller.js.map