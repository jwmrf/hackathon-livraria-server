import { Entity } from '@loopback/repository';
export declare class LivrariaLivro extends Entity {
    id?: string;
    livro_id: string;
    livraria_id: string;
    constructor(data?: Partial<LivrariaLivro>);
}
export interface LivrariaLivroRelations {
}
export declare type LivrariaLivroWithRelations = LivrariaLivro & LivrariaLivroRelations;
