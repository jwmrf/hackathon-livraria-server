"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recomendacao = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Recomendacao = class Recomendacao extends repository_1.Entity {
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
], Recomendacao.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Recomendacao.prototype, "livraria_id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Recomendacao.prototype, "cliente_id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Recomendacao.prototype, "livro_id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'boolean',
        default: false,
    }),
    tslib_1.__metadata("design:type", Boolean)
], Recomendacao.prototype, "feita", void 0);
Recomendacao = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Recomendacao);
exports.Recomendacao = Recomendacao;
//# sourceMappingURL=recomendacao.model.js.map