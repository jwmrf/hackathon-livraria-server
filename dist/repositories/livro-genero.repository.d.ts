import { DefaultCrudRepository } from '@loopback/repository';
import { LivroGenero, LivroGeneroRelations } from '../models';
import { PostgresDataSource } from '../datasources';
export declare class LivroGeneroRepository extends DefaultCrudRepository<LivroGenero, typeof LivroGenero.prototype.id, LivroGeneroRelations> {
    constructor(dataSource: PostgresDataSource);
}
