import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Livro, LivroRelations, LivroGenero} from '../models';
import {PostgresDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {LivroGeneroRepository} from './livro-genero.repository';

export class LivroRepository extends DefaultCrudRepository<
  Livro,
  typeof Livro.prototype.id,
  LivroRelations
> {

  public readonly generos: HasManyRepositoryFactory<LivroGenero, typeof Livro.prototype.id>;

  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource, @repository.getter('LivroGeneroRepository') protected livroGeneroRepositoryGetter: Getter<LivroGeneroRepository>,
  ) {
    super(Livro, dataSource);
    this.generos = this.createHasManyRepositoryFactoryFor('generos', livroGeneroRepositoryGetter,);
    this.registerInclusionResolver('generos', this.generos.inclusionResolver);
  }
}
