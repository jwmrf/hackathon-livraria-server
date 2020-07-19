import { DefaultCrudRepository } from '@loopback/repository';
import { ClienteGenero, ClienteGeneroRelations } from '../models';
import { PostgresDataSource } from '../datasources';
export declare class ClienteGeneroRepository extends DefaultCrudRepository<ClienteGenero, typeof ClienteGenero.prototype.id, ClienteGeneroRelations> {
    constructor(dataSource: PostgresDataSource);
}
