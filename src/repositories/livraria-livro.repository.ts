import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {LivrariaLivro, LivrariaLivroRelations, Livraria} from '../models';
import {PostgresDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {LivrariaRepository} from './livraria.repository';

export class LivrariaLivroRepository extends DefaultCrudRepository<
  LivrariaLivro,
  typeof LivrariaLivro.prototype.id,
  LivrariaLivroRelations
> {

  public readonly livrarialivro_livraria_id: BelongsToAccessor<Livraria, typeof LivrariaLivro.prototype.id>;

  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource, @repository.getter('LivrariaRepository') protected livrariaRepositoryGetter: Getter<LivrariaRepository>,
  ) {
    super(LivrariaLivro, dataSource);
    this.livrarialivro_livraria_id = this.createBelongsToAccessorFor('livrarialivro_livraria_id', livrariaRepositoryGetter,);
    this.registerInclusionResolver('livrarialivro_livraria_id', this.livrarialivro_livraria_id.inclusionResolver);
  }
}
