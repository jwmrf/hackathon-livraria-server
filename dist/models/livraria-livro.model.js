"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivrariaLivro = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const livraria_model_1 = require("./livraria.model");
let LivrariaLivro = class LivrariaLivro extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        id: true,
        generated: false,
        defaultFn: 'uuidv4',
    }),
    tslib_1.__metadata("design:type", String)
], LivrariaLivro.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], LivrariaLivro.prototype, "livro_id", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => livraria_model_1.Livraria, { name: 'livrarialivro_livraria_id' }),
    tslib_1.__metadata("design:type", String)
], LivrariaLivro.prototype, "livraria_id", void 0);
LivrariaLivro = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], LivrariaLivro);
exports.LivrariaLivro = LivrariaLivro;
//# sourceMappingURL=livraria-livro.model.js.map