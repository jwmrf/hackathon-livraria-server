import {Entity, hasMany, model, property} from '@loopback/repository';
import {LivroGenero} from './livro-genero.model';

@model()
export class Livro extends Entity {
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

  @hasMany(() => LivroGenero, {keyTo: 'livro_id'})
  generos: string[];
  /*
  @property({
    type: 'array',
    required: false
  })
  generos?: string[];
*/

  constructor(data?: Partial<Livro>) {
    super(data);
  }
}

export interface LivroRelations {
  // describe navigational properties here
}

export type LivroWithRelations = Livro & LivroRelations;
