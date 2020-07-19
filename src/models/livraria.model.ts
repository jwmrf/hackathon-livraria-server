import {Entity, model, property} from '@loopback/repository';

@model()
export class Livraria extends Entity {
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
  nome: string;

  @property({
    type: 'string',
    required: true,
  })
  telefone: string;


  constructor(data?: Partial<Livraria>) {
    super(data);
  }
}

export interface LivrariaRelations {
  // describe navigational properties here
}

export type LivrariaWithRelations = Livraria & LivrariaRelations;
