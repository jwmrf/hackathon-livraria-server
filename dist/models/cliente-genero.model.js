"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteGenero = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let ClienteGenero = class ClienteGenero extends repository_1.Entity {
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
], ClienteGenero.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], ClienteGenero.prototype, "cliente_id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], ClienteGenero.prototype, "genero_id", void 0);
ClienteGenero = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], ClienteGenero);
exports.ClienteGenero = ClienteGenero;
//# sourceMappingURL=cliente-genero.model.js.map