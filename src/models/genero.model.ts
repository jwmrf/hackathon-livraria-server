import {Entity, model, property} from '@loopback/repository';

@model()
export class Genero extends Entity {
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
  tipo: string;


  constructor(data?: Partial<Genero>) {
    super(data);
  }
}

export interface GeneroRelations {
  // describe navigational properties here
}

export type GeneroWithRelations = Genero & GeneroRelations;
