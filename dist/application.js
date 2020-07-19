"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerApplication = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const authorization_1 = require("@loopback/authorization");
const boot_1 = require("@loopback/boot");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const rest_explorer_1 = require("@loopback/rest-explorer");
const service_proxy_1 = require("@loopback/service-proxy");
const path_1 = tslib_1.__importDefault(require("path"));
const jwt_strategy_1 = require("./authentication-strategies/jwt-strategy");
const keys_1 = require("./keys");
const sequence_1 = require("./sequence");
const services_1 = require("./services");
const security_spec_1 = require("./utils/security-spec");
class ServerApplication extends boot_1.BootMixin(service_proxy_1.ServiceMixin(repository_1.RepositoryMixin(rest_1.RestApplication))) {
    constructor(options = {}) {
        super(options);
        // Set up the custom sequence
        this.sequence(sequence_1.MySequence);
        // Set up default home page
        this.static('/', path_1.default.join(__dirname, '../public'));
        // Customize @loopback/rest-explorer configuration here
        this.configure(rest_explorer_1.RestExplorerBindings.COMPONENT).to({
            path: '/explorer',
        });
        this.component(rest_explorer_1.RestExplorerComponent);
        this.component(authentication_1.AuthenticationComponent);
        this.component(authorization_1.AuthorizationComponent);
        this.setUpBindings();
        this.add(core_1.createBindingFromClass(jwt_strategy_1.JWTAuthenticationStrategy));
        authentication_1.registerAuthenticationStrategy(this, jwt_strategy_1.JWTAuthenticationStrategy);
        this.projectRoot = __dirname;
        // Customize @loopback/boot Booter Conventions here
        this.bootOptions = {
            controllers: {
                // Customize ControllerBooter Conventions here
                dirs: ['controllers'],
                extensions: ['.controller.js'],
                nested: true,
            },
        };
        const spec = {
            openapi: '3.0.0',
            info: { title: 'pkg.name', version: 'pkg.version' },
            paths: {},
            components: { securitySchemes: security_spec_1.SECURITY_SCHEME_SPEC },
            servers: [{ url: '/api' }],
            security: security_spec_1.SECURITY_SPEC,
        };
        this.api(spec);
    }
    setUpBindings() {
        // Bind package.json to the application context
        // this.bind(PackageKey).to(pkg);
        this.bind(keys_1.TokenServiceBindings.TOKEN_SECRET).to(keys_1.TokenServiceConstants.TOKEN_SECRET_VALUE);
        this.bind(keys_1.TokenServiceBindings.TOKEN_EXPIRES_IN).to(keys_1.TokenServiceConstants.TOKEN_EXPIRES_IN_VALUE);
        this.bind(keys_1.TokenServiceBindings.TOKEN_SERVICE).toClass(services_1.JWTService);
        // // Bind bcrypt hash services
        this.bind(keys_1.PasswordHasherBindings.ROUNDS).to(10);
        this.bind(keys_1.PasswordHasherBindings.PASSWORD_HASHER).toClass(services_1.BcryptHasher);
        this.bind(keys_1.UserServiceBindings.USER_SERVICE).toClass(services_1.MyUserService);
    }
}
exports.ServerApplication = ServerApplication;
//# sourceMappingURL=application.js.map