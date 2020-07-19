import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {ClienteGenero} from '../models';
import {ClienteGeneroRepository} from '../repositories';

export class ClientegeneroController {
  constructor(
    @repository(ClienteGeneroRepository)
    public clienteGeneroRepository : ClienteGeneroRepository,
  ) {}

  @post('/cliente-generos', {
    responses: {
      '200': {
        description: 'ClienteGenero model instance',
        content: {'application/json': {schema: getModelSchemaRef(ClienteGenero)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ClienteGenero, {
            title: 'NewClienteGenero',
            exclude: ['id'],
          }),
        },
      },
    })
    clienteGenero: Omit<ClienteGenero, 'id'>,
  ): Promise<ClienteGenero> {
    return this.clienteGeneroRepository.create(clienteGenero);
  }

  @get('/cliente-generos/count', {
    responses: {
      '200': {
        description: 'ClienteGenero model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(ClienteGenero) where?: Where<ClienteGenero>,
  ): Promise<Count> {
    return this.clienteGeneroRepository.count(where);
  }

  @get('/cliente-generos', {
    responses: {
      '200': {
        description: 'Array of ClienteGenero model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(ClienteGenero, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(ClienteGenero) filter?: Filter<ClienteGenero>,
  ): Promise<ClienteGenero[]> {
    return this.clienteGeneroRepository.find(filter);
  }

  @patch('/cliente-generos', {
    responses: {
      '200': {
        description: 'ClienteGenero PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ClienteGenero, {partial: true}),
        },
      },
    })
    clienteGenero: ClienteGenero,
    @param.where(ClienteGenero) where?: Where<ClienteGenero>,
  ): Promise<Count> {
    return this.clienteGeneroRepository.updateAll(clienteGenero, where);
  }

  @get('/cliente-generos/{id}', {
    responses: {
      '200': {
        description: 'ClienteGenero model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ClienteGenero, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(ClienteGenero, {exclude: 'where'}) filter?: FilterExcludingWhere<ClienteGenero>
  ): Promise<ClienteGenero> {
    return this.clienteGeneroRepository.findById(id, filter);
  }

  @patch('/cliente-generos/{id}', {
    responses: {
      '204': {
        description: 'ClienteGenero PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ClienteGenero, {partial: true}),
        },
      },
    })
    clienteGenero: ClienteGenero,
  ): Promise<void> {
    await this.clienteGeneroRepository.updateById(id, clienteGenero);
  }

  @put('/cliente-generos/{id}', {
    responses: {
      '204': {
        description: 'ClienteGenero PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() clienteGenero: ClienteGenero,
  ): Promise<void> {
    await this.clienteGeneroRepository.replaceById(id, clienteGenero);
  }

  @del('/cliente-generos/{id}', {
    responses: {
      '204': {
        description: 'ClienteGenero DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.clienteGeneroRepository.deleteById(id);
  }
}
