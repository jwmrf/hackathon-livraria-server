import {Entity, model, property} from '@loopback/repository';

@model()
export class Recomendacao extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  livraria_id: string;

  @property({
    type: 'string',
    required: true,
  })
  cliente_id: string;

  @property({
    type: 'string',
    required: true,
  })
  livro_id: string;

  @property({
    type: 'boolean',
    default: false,
  })
  feita?: boolean;


  constructor(data?: Partial<Recomendacao>) {
    super(data);
  }
}

export interface RecomendacaoRelations {
  // describe navigational properties here
}

export type RecomendacaoWithRelations = Recomendacao & RecomendacaoRelations;
