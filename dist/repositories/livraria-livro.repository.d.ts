import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { LivrariaLivro, LivrariaLivroRelations, Livraria } from '../models';
import { PostgresDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { LivrariaRepository } from './livraria.repository';
export declare class LivrariaLivroRepository extends DefaultCrudRepository<LivrariaLivro, typeof LivrariaLivro.prototype.id, LivrariaLivroRelations> {
    protected livrariaRepositoryGetter: Getter<LivrariaRepository>;
    readonly livrarialivro_livraria_id: BelongsToAccessor<Livraria, typeof LivrariaLivro.prototype.id>;
    constructor(dataSource: PostgresDataSource, livrariaRepositoryGetter: Getter<LivrariaRepository>);
}
