"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CredentialsRequestBody = exports.UserProfileSchema = void 0;
exports.UserProfileSchema = {
    type: 'object',
    required: ['id'],
    properties: {
        id: { type: 'string' },
        email: { type: 'string' },
        name: { type: 'string' },
    },
};
const CredentialsSchema = {
    type: 'object',
    required: ['email', 'password'],
    properties: {
        email: {
            type: 'string',
            format: 'email',
        },
        password: {
            type: 'string',
            minLength: 8,
        },
    },
};
exports.CredentialsRequestBody = {
    description: 'The input of login function',
    required: true,
    content: {
        'application/json': { schema: CredentialsSchema },
    },
};
//# sourceMappingURL=user-controller.specs.js.map