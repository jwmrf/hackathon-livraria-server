import {Entity, model, property} from '@loopback/repository';

@model()
export class LivroGenero extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    defaultFn: 'uuidv4',
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  livro_id: string;

  @property({
    type: 'string',
    required: true,
  })
  genero_id: string;


  constructor(data?: Partial<LivroGenero>) {
    super(data);
  }
}

export interface LivroGeneroRelations {
  // describe navigational properties here
}

export type LivroGeneroWithRelations = LivroGenero & LivroGeneroRelations;
