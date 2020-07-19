import {Entity, model, property} from '@loopback/repository';

@model()
export class Livro extends Entity {
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
  })
  isbn?: string;

  @property({
    type: 'string',
  })
  sinopse?: string;

  @property({
    type: 'string',
  })
  texto_especial?: string;

  @property({
    type: 'string',
  })
  link_venda?: string;

  @property({
    type: 'string',
  })
  img_url?: string;


  constructor(data?: Partial<Livro>) {
    super(data);
  }
}

export interface LivroRelations {
  // describe navigational properties here
}

export type LivroWithRelations = Livro & LivroRelations;
