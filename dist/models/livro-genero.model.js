"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivroGenero = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let LivroGenero = class LivroGenero extends repository_1.Entity {
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
], LivroGenero.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], LivroGenero.prototype, "livro_id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], LivroGenero.prototype, "genero_id", void 0);
LivroGenero = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], LivroGenero);
exports.LivroGenero = LivroGenero;
//# sourceMappingURL=livro-genero.model.js.map