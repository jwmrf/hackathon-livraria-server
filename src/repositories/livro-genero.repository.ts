import {DefaultCrudRepository} from '@loopback/repository';
import {LivroGenero, LivroGeneroRelations} from '../models';
import {PostgresDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class LivroGeneroRepository extends DefaultCrudRepository<
  LivroGenero,
  typeof LivroGenero.prototype.id,
  LivroGeneroRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(LivroGenero, dataSource);
  }
}
