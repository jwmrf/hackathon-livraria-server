import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Recomendacao } from '../models';
import { RecomendacaoRepository } from '../repositories';
export declare class RecomendacaoController {
    recomendacaoRepository: RecomendacaoRepository;
    constructor(recomendacaoRepository: RecomendacaoRepository);
    create(recomendacao: Omit<Recomendacao, 'id'>): Promise<Recomendacao>;
    count(where?: Where<Recomendacao>): Promise<Count>;
    find(filter?: Filter<Recomendacao>): Promise<Recomendacao[]>;
    updateAll(recomendacao: Recomendacao, where?: Where<Recomendacao>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Recomendacao>): Promise<Recomendacao>;
    updateById(id: string, recomendacao: Recomendacao): Promise<void>;
    replaceById(id: string, recomendacao: Recomendacao): Promise<void>;
    deleteById(id: string): Promise<void>;
}
