import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { LivroGenero } from '../models';
import { LivroGeneroRepository } from '../repositories';
export declare class LivrogeneroController {
    livroGeneroRepository: LivroGeneroRepository;
    constructor(livroGeneroRepository: LivroGeneroRepository);
    create(livroGenero: Omit<LivroGenero, 'id'>): Promise<LivroGenero>;
    count(where?: Where<LivroGenero>): Promise<Count>;
    find(filter?: Filter<LivroGenero>): Promise<LivroGenero[]>;
    updateAll(livroGenero: LivroGenero, where?: Where<LivroGenero>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<LivroGenero>): Promise<LivroGenero>;
    updateById(id: string, livroGenero: LivroGenero): Promise<void>;
    replaceById(id: string, livroGenero: LivroGenero): Promise<void>;
    deleteById(id: string): Promise<void>;
}
