import { Entity } from '@loopback/repository';
export declare class Livro extends Entity {
    id?: string;
    nome: string;
    isbn?: string;
    sinopse?: string;
    texto_especial?: string;
    link_venda?: string;
    img_url?: string;
    generos: string[];
    constructor(data?: Partial<Livro>);
}
export interface LivroRelations {
}
export declare type LivroWithRelations = Livro & LivroRelations;
