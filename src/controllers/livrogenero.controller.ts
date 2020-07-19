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
import {LivroGenero} from '../models';
import {LivroGeneroRepository} from '../repositories';

export class LivrogeneroController {
  constructor(
    @repository(LivroGeneroRepository)
    public livroGeneroRepository : LivroGeneroRepository,
  ) {}

  @post('/livro-generos', {
    responses: {
      '200': {
        description: 'LivroGenero model instance',
        content: {'application/json': {schema: getModelSchemaRef(LivroGenero)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LivroGenero, {
            title: 'NewLivroGenero',
            exclude: ['id'],
          }),
        },
      },
    })
    livroGenero: Omit<LivroGenero, 'id'>,
  ): Promise<LivroGenero> {
    return this.livroGeneroRepository.create(livroGenero);
  }

  @get('/livro-generos/count', {
    responses: {
      '200': {
        description: 'LivroGenero model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(LivroGenero) where?: Where<LivroGenero>,
  ): Promise<Count> {
    return this.livroGeneroRepository.count(where);
  }

  @get('/livro-generos', {
    responses: {
      '200': {
        description: 'Array of LivroGenero model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(LivroGenero, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(LivroGenero) filter?: Filter<LivroGenero>,
  ): Promise<LivroGenero[]> {
    return this.livroGeneroRepository.find(filter);
  }

  @patch('/livro-generos', {
    responses: {
      '200': {
        description: 'LivroGenero PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LivroGenero, {partial: true}),
        },
      },
    })
    livroGenero: LivroGenero,
    @param.where(LivroGenero) where?: Where<LivroGenero>,
  ): Promise<Count> {
    return this.livroGeneroRepository.updateAll(livroGenero, where);
  }

  @get('/livro-generos/{id}', {
    responses: {
      '200': {
        description: 'LivroGenero model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(LivroGenero, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(LivroGenero, {exclude: 'where'}) filter?: FilterExcludingWhere<LivroGenero>
  ): Promise<LivroGenero> {
    return this.livroGeneroRepository.findById(id, filter);
  }

  @patch('/livro-generos/{id}', {
    responses: {
      '204': {
        description: 'LivroGenero PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LivroGenero, {partial: true}),
        },
      },
    })
    livroGenero: LivroGenero,
  ): Promise<void> {
    await this.livroGeneroRepository.updateById(id, livroGenero);
  }

  @put('/livro-generos/{id}', {
    responses: {
      '204': {
        description: 'LivroGenero PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() livroGenero: LivroGenero,
  ): Promise<void> {
    await this.livroGeneroRepository.replaceById(id, livroGenero);
  }

  @del('/livro-generos/{id}', {
    responses: {
      '204': {
        description: 'LivroGenero DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.livroGeneroRepository.deleteById(id);
  }
}
