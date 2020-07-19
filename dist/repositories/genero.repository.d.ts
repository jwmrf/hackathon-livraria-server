import { DefaultCrudRepository } from '@loopback/repository';
import { Genero, GeneroRelations } from '../models';
import { PostgresDataSource } from '../datasources';
export declare class GeneroRepository extends DefaultCrudRepository<Genero, typeof Genero.prototype.id, GeneroRelations> {
    constructor(dataSource: PostgresDataSource);
}
