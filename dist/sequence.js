"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySequence = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const context_1 = require("@loopback/context");
const rest_1 = require("@loopback/rest");
const SequenceActions = rest_1.RestBindings.SequenceActions;
let MySequence = class MySequence {
    constructor(findRoute, parseParams, invoke, send, reject) {
        this.findRoute = findRoute;
        this.parseParams = parseParams;
        this.invoke = invoke;
        this.send = send;
        this.reject = reject;
        /**
         * Optional invoker for registered middleware in a chain.
         * To be injected via SequenceActions.INVOKE_MIDDLEWARE.
         */
        this.invokeMiddleware = () => false;
    }
    async handle(context) {
        try {
            const { request, response } = context;
            const finished = await this.invokeMiddleware(context);
            if (finished)
                return;
            const route = this.findRoute(request);
            //call authentication action
            await this.authenticateRequest(request);
            const args = await this.parseParams(request, route);
            const result = await this.invoke(route, args);
            this.send(response, result);
        }
        catch (err) {
            if (err.code === authentication_1.AUTHENTICATION_STRATEGY_NOT_FOUND ||
                err.code === authentication_1.USER_PROFILE_NOT_FOUND) {
                Object.assign(err, { statusCode: 401 /* Unauthorized */ });
            }
            this.reject(context, err);
            return;
        }
    }
};
tslib_1.__decorate([
    context_1.inject(SequenceActions.INVOKE_MIDDLEWARE, { optional: true }),
    tslib_1.__metadata("design:type", Function)
], MySequence.prototype, "invokeMiddleware", void 0);
tslib_1.__decorate([
    context_1.inject(authentication_1.AuthenticationBindings.AUTH_ACTION),
    tslib_1.__metadata("design:type", Function)
], MySequence.prototype, "authenticateRequest", void 0);
MySequence = tslib_1.__decorate([
    tslib_1.__param(0, context_1.inject(SequenceActions.FIND_ROUTE)),
    tslib_1.__param(1, context_1.inject(SequenceActions.PARSE_PARAMS)),
    tslib_1.__param(2, context_1.inject(SequenceActions.INVOKE_METHOD)),
    tslib_1.__param(3, context_1.inject(SequenceActions.SEND)),
    tslib_1.__param(4, context_1.inject(SequenceActions.REJECT)),
    tslib_1.__metadata("design:paramtypes", [Function, Function, Function, Function, Function])
], MySequence);
exports.MySequence = MySequence;
//# sourceMappingURL=sequence.js.map