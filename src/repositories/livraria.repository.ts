import {DefaultCrudRepository} from '@loopback/repository';
import {Livraria, LivrariaRelations} from '../models';
import {PostgresDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class LivrariaRepository extends DefaultCrudRepository<
  Livraria,
  typeof Livraria.prototype.id,
  LivrariaRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(Livraria, dataSource);
  }
}
