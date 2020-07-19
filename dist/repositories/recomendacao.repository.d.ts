import { DefaultCrudRepository } from '@loopback/repository';
import { Recomendacao, RecomendacaoRelations } from '../models';
import { PostgresDataSource } from '../datasources';
export declare class RecomendacaoRepository extends DefaultCrudRepository<Recomendacao, typeof Recomendacao.prototype.id, RecomendacaoRelations> {
    constructor(dataSource: PostgresDataSource);
}
