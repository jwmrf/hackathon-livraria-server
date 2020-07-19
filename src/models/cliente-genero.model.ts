import {Entity, model, property} from '@loopback/repository';

@model()
export class ClienteGenero extends Entity {
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
  cliente_id: string;

  @property({
    type: 'string',
    required: true,
  })
  genero_id: string;


  constructor(data?: Partial<ClienteGenero>) {
    super(data);
  }
}

export interface ClienteGeneroRelations {
  // describe navigational properties here
}

export type ClienteGeneroWithRelations = ClienteGenero & ClienteGeneroRelations;
