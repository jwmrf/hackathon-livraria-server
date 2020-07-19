import {DefaultCrudRepository} from '@loopback/repository';
import {ClienteGenero, ClienteGeneroRelations} from '../models';
import {PostgresDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ClienteGeneroRepository extends DefaultCrudRepository<
  ClienteGenero,
  typeof ClienteGenero.prototype.id,
  ClienteGeneroRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(ClienteGenero, dataSource);
  }
}
