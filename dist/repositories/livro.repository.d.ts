import { DefaultCrudRepository } from '@loopback/repository';
import { Livro, LivroRelations } from '../models';
import { PostgresDataSource } from '../datasources';
export declare class LivroRepository extends DefaultCrudRepository<Livro, typeof Livro.prototype.id, LivroRelations> {
    constructor(dataSource: PostgresDataSource);
}
