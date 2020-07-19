import { Entity } from '@loopback/repository';
export declare class Genero extends Entity {
    id?: string;
    tipo: string;
    constructor(data?: Partial<Genero>);
}
export interface GeneroRelations {
}
export declare type GeneroWithRelations = Genero & GeneroRelations;
