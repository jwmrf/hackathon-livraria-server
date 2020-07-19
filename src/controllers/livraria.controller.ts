import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param,


  patch, post,




  put,

  requestBody
} from '@loopback/rest';
import {Livraria} from '../models';
import {LivrariaRepository} from '../repositories';

export class LivrariaController {
  constructor(
    @repository(LivrariaRepository)
    public livrariaRepository: LivrariaRepository,
  ) {}

  @post('/livrarias', {
    responses: {
      '200': {
        description: 'Livraria model instance',
        content: {'application/json': {schema: getModelSchemaRef(Livraria)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Livraria, {
            title: 'NewLivraria',
            exclude: ['id'],
          }),
        },
      },
    })
    livraria: Omit<Livraria, 'id'>,
  ): Promise<Livraria> {
    return this.livrariaRepository.create(livraria);
  }

  @get('/livrarias/count', {
    responses: {
      '200': {
        description: 'Livraria model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Livraria) where?: Where<Livraria>,
  ): Promise<Count> {
    return this.livrariaRepository.count(where);
  }

  @get('/livrarias', {
    responses: {
      '200': {
        description: 'Array of Livraria model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Livraria, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Livraria) filter?: Filter<Livraria>,
  ): Promise<Livraria[]> {
    return this.livrariaRepository.find(filter);
  }

  @patch('/livrarias', {
    responses: {
      '200': {
        description: 'Livraria PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Livraria, {partial: true}),
        },
      },
    })
    livraria: Livraria,
    @param.where(Livraria) where?: Where<Livraria>,
  ): Promise<Count> {
    return this.livrariaRepository.updateAll(livraria, where);
  }

  @get('/livrarias/{id}', {
    responses: {
      '200': {
        description: 'Livraria model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Livraria, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Livraria, {exclude: 'where'}) filter?: FilterExcludingWhere<Livraria>
  ): Promise<Livraria> {
    return this.livrariaRepository.findById(id, filter);
  }

  @patch('/livrarias/{id}', {
    responses: {
      '204': {
        description: 'Livraria PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Livraria, {partial: true}),
        },
      },
    })
    livraria: Livraria,
  ): Promise<void> {
    await this.livrariaRepository.updateById(id, livraria);
  }

  @put('/livrarias/{id}', {
    responses: {
      '204': {
        description: 'Livraria PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() livraria: Livraria,
  ): Promise<void> {
    await this.livrariaRepository.replaceById(id, livraria);
  }

  @del('/livrarias/{id}', {
    responses: {
      '204': {
        description: 'Livraria DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.livrariaRepository.deleteById(id);
  }
}
