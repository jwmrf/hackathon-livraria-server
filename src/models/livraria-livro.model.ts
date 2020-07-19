import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Livraria} from './livraria.model';

@model()
export class LivrariaLivro extends Entity {
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

  @belongsTo(() => Livraria, {name: 'livrarialivro_livraria_id'})
  livraria_id: string;

  constructor(data?: Partial<LivrariaLivro>) {
    super(data);
  }
}

export interface LivrariaLivroRelations {
  // describe navigational properties here
}

export type LivrariaLivroWithRelations = LivrariaLivro & LivrariaLivroRelations;
