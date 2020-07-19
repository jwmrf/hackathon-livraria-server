"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCredentials = void 0;
const tslib_1 = require("tslib");
const rest_1 = require("@loopback/rest");
const isemail_1 = tslib_1.__importDefault(require("isemail"));
function validateCredentials(credentials) {
    // Validate Email
    if (!isemail_1.default.validate(credentials.email)) {
        throw new rest_1.HttpErrors.UnprocessableEntity('Email inválido');
    }
    // Validate Password Length
    if (!credentials.password || credentials.password.length < 8) {
        throw new rest_1.HttpErrors.UnprocessableEntity('Senha precisa de no mínimo 8 caracteres');
    }
}
exports.validateCredentials = validateCredentials;
//# sourceMappingURL=validator.service.js.map