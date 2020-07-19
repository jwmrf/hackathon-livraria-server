"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivrariaLivroRepository = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const models_1 = require("../models");
const datasources_1 = require("../datasources");
const core_1 = require("@loopback/core");
let LivrariaLivroRepository = class LivrariaLivroRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, livrariaRepositoryGetter) {
        super(models_1.LivrariaLivro, dataSource);
        this.livrariaRepositoryGetter = livrariaRepositoryGetter;
        this.livrarialivro_livraria_id = this.createBelongsToAccessorFor('livrarialivro_livraria_id', livrariaRepositoryGetter);
        this.registerInclusionResolver('livrarialivro_livraria_id', this.livrarialivro_livraria_id.inclusionResolver);
    }
};
LivrariaLivroRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.postgres')), tslib_1.__param(1, repository_1.repository.getter('LivrariaRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.PostgresDataSource, Function])
], LivrariaLivroRepository);
exports.LivrariaLivroRepository = LivrariaLivroRepository;
//# sourceMappingURL=livraria-livro.repository.js.map