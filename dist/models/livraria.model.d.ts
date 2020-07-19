import { Entity } from '@loopback/repository';
export declare class Livraria extends Entity {
    id?: string;
    nome: string;
    telefone: string;
    constructor(data?: Partial<Livraria>);
}
export interface LivrariaRelations {
}
export declare type LivrariaWithRelations = Livraria & LivrariaRelations;
