import {DefaultCrudRepository} from '@loopback/repository';
import {Genero, GeneroRelations} from '../models';
import {PostgresDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class GeneroRepository extends DefaultCrudRepository<
  Genero,
  typeof Genero.prototype.id,
  GeneroRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(Genero, dataSource);
  }
}
