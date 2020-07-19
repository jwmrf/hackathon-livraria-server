"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const user_credentials_model_1 = require("./user-credentials.model");
let User = class User extends repository_1.Entity {
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
], User.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        defaultFn: '10',
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "win_stop", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        defaultFn: '10',
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "loss_stop", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "email", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        nullable: false,
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "role", void 0);
tslib_1.__decorate([
    repository_1.hasOne(() => user_credentials_model_1.UserCredentials),
    tslib_1.__metadata("design:type", user_credentials_model_1.UserCredentials)
], User.prototype, "userCredentials", void 0);
User = tslib_1.__decorate([
    repository_1.model({
        settings: {
            indexes: {
                uniqueEmail: {
                    keys: {
                        email: 1,
                    },
                    options: {
                        unique: true,
                    },
                },
            },
        },
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], User);
exports.User = User;
//# sourceMappingURL=user.model.js.map