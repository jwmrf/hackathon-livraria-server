import { DefaultCrudRepository } from '@loopback/repository';
import { LivrariaLivro, LivrariaLivroRelations } from '../models';
import { PostgresDataSource } from '../datasources';
export declare class LivrariaLivroRepository extends DefaultCrudRepository<LivrariaLivro, typeof LivrariaLivro.prototype.id, LivrariaLivroRelations> {
    constructor(dataSource: PostgresDataSource);
}
