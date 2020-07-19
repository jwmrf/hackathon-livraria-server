import {DefaultCrudRepository} from '@loopback/repository';
import {Recomendacao, RecomendacaoRelations} from '../models';
import {PostgresDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RecomendacaoRepository extends DefaultCrudRepository<
  Recomendacao,
  typeof Recomendacao.prototype.id,
  RecomendacaoRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(Recomendacao, dataSource);
  }
}
