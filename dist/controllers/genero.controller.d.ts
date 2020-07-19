import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Genero } from '../models';
import { GeneroRepository } from '../repositories';
export declare class GeneroController {
    generoRepository: GeneroRepository;
    constructor(generoRepository: GeneroRepository);
    create(genero: Omit<Genero, 'id'>): Promise<Genero>;
    count(where?: Where<Genero>): Promise<Count>;
    find(filter?: Filter<Genero>): Promise<Genero[]>;
    updateAll(genero: Genero, where?: Where<Genero>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Genero>): Promise<Genero>;
    updateById(id: string, genero: Genero): Promise<void>;
    replaceById(id: string, genero: Genero): Promise<void>;
    deleteById(id: string): Promise<void>;
}
