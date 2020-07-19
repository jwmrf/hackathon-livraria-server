import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { ClienteGenero } from '../models';
import { ClienteGeneroRepository } from '../repositories';
export declare class ClientegeneroController {
    clienteGeneroRepository: ClienteGeneroRepository;
    constructor(clienteGeneroRepository: ClienteGeneroRepository);
    create(clienteGenero: Omit<ClienteGenero, 'id'>): Promise<ClienteGenero>;
    count(where?: Where<ClienteGenero>): Promise<Count>;
    find(filter?: Filter<ClienteGenero>): Promise<ClienteGenero[]>;
    updateAll(clienteGenero: ClienteGenero, where?: Where<ClienteGenero>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<ClienteGenero>): Promise<ClienteGenero>;
    updateById(id: string, clienteGenero: ClienteGenero): Promise<void>;
    replaceById(id: string, clienteGenero: ClienteGenero): Promise<void>;
    deleteById(id: string): Promise<void>;
}
