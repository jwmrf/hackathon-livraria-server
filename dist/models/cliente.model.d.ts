import { Entity } from '@loopback/repository';
export declare class Cliente extends Entity {
    id: string;
    telefone?: string;
    constructor(data?: Partial<Cliente>);
}
export interface ClienteRelations {
}
export declare type ClienteWithRelations = Cliente & ClienteRelations;
