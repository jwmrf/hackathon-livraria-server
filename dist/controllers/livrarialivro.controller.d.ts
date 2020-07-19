import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { LivrariaLivro } from '../models';
import { LivrariaLivroRepository } from '../repositories';
export declare class LivrarialivroController {
    livrariaLivroRepository: LivrariaLivroRepository;
    constructor(livrariaLivroRepository: LivrariaLivroRepository);
    create(livrariaLivro: Omit<LivrariaLivro, 'id'>): Promise<LivrariaLivro>;
    count(where?: Where<LivrariaLivro>): Promise<Count>;
    find(filter?: Filter<LivrariaLivro>): Promise<LivrariaLivro[]>;
    updateAll(livrariaLivro: LivrariaLivro, where?: Where<LivrariaLivro>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<LivrariaLivro>): Promise<LivrariaLivro>;
    updateById(id: string, livrariaLivro: LivrariaLivro): Promise<void>;
    replaceById(id: string, livrariaLivro: LivrariaLivro): Promise<void>;
    deleteById(id: string): Promise<void>;
}
