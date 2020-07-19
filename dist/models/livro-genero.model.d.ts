import { Entity } from '@loopback/repository';
export declare class LivroGenero extends Entity {
    id?: string;
    livro_id: string;
    genero_id: string;
    constructor(data?: Partial<LivroGenero>);
}
export interface LivroGeneroRelations {
}
export declare type LivroGeneroWithRelations = LivroGenero & LivroGeneroRelations;
