import { Entity } from '@loopback/repository';
export declare class Recomendacao extends Entity {
    id?: string;
    livraria_id: string;
    cliente_id: string;
    livro_id: string;
    feita?: boolean;
    constructor(data?: Partial<Recomendacao>);
}
export interface RecomendacaoRelations {
}
export declare type RecomendacaoWithRelations = Recomendacao & RecomendacaoRelations;
