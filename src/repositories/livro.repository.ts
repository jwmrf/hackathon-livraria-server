import {DefaultCrudRepository} from '@loopback/repository';
import {Livro, LivroRelations} from '../models';
import {PostgresDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class LivroRepository extends DefaultCrudRepository<
  Livro,
  typeof Livro.prototype.id,
  LivroRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(Livro, dataSource);
  }
}
