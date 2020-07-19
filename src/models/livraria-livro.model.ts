import {Entity, model, property} from '@loopback/repository';

@model()
export class LivrariaLivro extends Entity {
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
  livro_id: string;


  constructor(data?: Partial<LivrariaLivro>) {
    super(data);
  }
}

export interface LivrariaLivroRelations {
  // describe navigational properties here
}

export type LivrariaLivroWithRelations = LivrariaLivro & LivrariaLivroRelations;
