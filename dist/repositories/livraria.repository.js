"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivrariaRepository = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const models_1 = require("../models");
const datasources_1 = require("../datasources");
const core_1 = require("@loopback/core");
let LivrariaRepository = class LivrariaRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        super(models_1.Livraria, dataSource);
    }
};
LivrariaRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.postgres')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.PostgresDataSource])
], LivrariaRepository);
exports.LivrariaRepository = LivrariaRepository;
//# sourceMappingURL=livraria.repository.js.map