"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'postgres',
    connector: 'postgresql',
    url: 'postgres://zxmcpvkqhocnhn:583be5606c251971aaefd1cd2e364843074e3f17b745b62245bd57ba2da59219@ec2-52-202-66-191.compute-1.amazonaws.com:5432/dehsqojn4clnsh',
    host: 'ec2-52-202-66-191.compute-1.amazonaws.com',
    port: 5432,
    user: 'zxmcpvkqhocnhn',
    password: '583be5606c251971aaefd1cd2e364843074e3f17b745b62245bd57ba2da59219',
    database: 'dehsqojn4clnsh',
    herokucli: 'heroku pg:psql postgresql-flat-02585 --app team32-platform-server'
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let PostgresDataSource = class PostgresDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
PostgresDataSource.dataSourceName = 'postgres';
PostgresDataSource.defaultConfig = config;
PostgresDataSource = tslib_1.__decorate([
    core_1.lifeCycleObserver('datasource'),
    tslib_1.__param(0, core_1.inject('datasources.config.postgres', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], PostgresDataSource);
exports.PostgresDataSource = PostgresDataSource;
//# sourceMappingURL=postgres.datasource.js.map