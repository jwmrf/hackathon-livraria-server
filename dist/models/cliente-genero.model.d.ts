import { Entity } from '@loopback/repository';
export declare class ClienteGenero extends Entity {
    id?: string;
    cliente_id: string;
    genero_id: string;
    constructor(data?: Partial<ClienteGenero>);
}
export interface ClienteGeneroRelations {
}
export declare type ClienteGeneroWithRelations = ClienteGenero & ClienteGeneroRelations;
