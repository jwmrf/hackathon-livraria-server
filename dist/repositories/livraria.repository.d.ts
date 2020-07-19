import { DefaultCrudRepository } from '@loopback/repository';
import { Livraria, LivrariaRelations } from '../models';
import { PostgresDataSource } from '../datasources';
export declare class LivrariaRepository extends DefaultCrudRepository<Livraria, typeof Livraria.prototype.id, LivrariaRelations> {
    constructor(dataSource: PostgresDataSource);
}
