import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { Livro, LivroRelations, LivroGenero } from '../models';
import { PostgresDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { LivroGeneroRepository } from './livro-genero.repository';
export declare class LivroRepository extends DefaultCrudRepository<Livro, typeof Livro.prototype.id, LivroRelations> {
    protected livroGeneroRepositoryGetter: Getter<LivroGeneroRepository>;
    readonly generos: HasManyRepositoryFactory<LivroGenero, typeof Livro.prototype.id>;
    constructor(dataSource: PostgresDataSource, livroGeneroRepositoryGetter: Getter<LivroGeneroRepository>);
}
