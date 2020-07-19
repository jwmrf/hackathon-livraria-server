import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Livraria } from '../models';
import { LivrariaRepository } from '../repositories';
export declare class LivrariaController {
    livrariaRepository: LivrariaRepository;
    constructor(livrariaRepository: LivrariaRepository);
    create(livraria: Omit<Livraria, 'id'>): Promise<Livraria>;
    count(where?: Where<Livraria>): Promise<Count>;
    find(filter?: Filter<Livraria>): Promise<Livraria[]>;
    updateAll(livraria: Livraria, where?: Where<Livraria>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Livraria>): Promise<Livraria>;
    updateById(id: string, livraria: Livraria): Promise<void>;
    replaceById(id: string, livraria: Livraria): Promise<void>;
    deleteById(id: string): Promise<void>;
}
