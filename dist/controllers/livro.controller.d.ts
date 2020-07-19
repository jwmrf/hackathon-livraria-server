import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Livro } from '../models';
import { GeneroRepository, LivroGeneroRepository, LivroRepository } from '../repositories';
export declare class LivroController {
    livroRepository: LivroRepository;
    livroGeneroRepository: LivroGeneroRepository;
    generoRepository: GeneroRepository;
    constructor(livroRepository: LivroRepository, livroGeneroRepository: LivroGeneroRepository, generoRepository: GeneroRepository);
    create(livro: Omit<Livro, 'id'>): Promise<Livro>;
    count(where?: Where<Livro>): Promise<Count>;
    find(filter?: Filter<Livro>): Promise<any>;
    updateAll(livro: Livro, where?: Where<Livro>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Livro>): Promise<Livro>;
    updateById(id: string, livro: Livro): Promise<void>;
    replaceById(id: string, livro: Livro): Promise<void>;
    deleteById(id: string): Promise<void>;
}
