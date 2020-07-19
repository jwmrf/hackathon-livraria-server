"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livraria = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Livraria = class Livraria extends repository_1.Entity {
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
], Livraria.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Livraria.prototype, "nome", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Livraria.prototype, "telefone", void 0);
Livraria = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Livraria);
exports.Livraria = Livraria;
//# sourceMappingURL=livraria.model.js.map