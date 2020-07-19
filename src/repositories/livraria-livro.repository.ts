import {DefaultCrudRepository} from '@loopback/repository';
import {LivrariaLivro, LivrariaLivroRelations} from '../models';
import {PostgresDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class LivrariaLivroRepository extends DefaultCrudRepository<
  LivrariaLivro,
  typeof LivrariaLivro.prototype.id,
  LivrariaLivroRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(LivrariaLivro, dataSource);
  }
}
