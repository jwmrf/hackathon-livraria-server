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
import {LivrariaLivro} from '../models';
import {LivrariaLivroRepository} from '../repositories';

export class LivrarialivroController {
  constructor(
    @repository(LivrariaLivroRepository)
    public livrariaLivroRepository : LivrariaLivroRepository,
  ) {}

  @post('/livraria-livros', {
    responses: {
      '200': {
        description: 'LivrariaLivro model instance',
        content: {'application/json': {schema: getModelSchemaRef(LivrariaLivro)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LivrariaLivro, {
            title: 'NewLivrariaLivro',
            exclude: ['id'],
          }),
        },
      },
    })
    livrariaLivro: Omit<LivrariaLivro, 'id'>,
  ): Promise<LivrariaLivro> {
    return this.livrariaLivroRepository.create(livrariaLivro);
  }

  @get('/livraria-livros/count', {
    responses: {
      '200': {
        description: 'LivrariaLivro model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(LivrariaLivro) where?: Where<LivrariaLivro>,
  ): Promise<Count> {
    return this.livrariaLivroRepository.count(where);
  }

  @get('/livraria-livros', {
    responses: {
      '200': {
        description: 'Array of LivrariaLivro model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(LivrariaLivro, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(LivrariaLivro) filter?: Filter<LivrariaLivro>,
  ): Promise<LivrariaLivro[]> {
    return this.livrariaLivroRepository.find(filter);
  }

  @patch('/livraria-livros', {
    responses: {
      '200': {
        description: 'LivrariaLivro PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LivrariaLivro, {partial: true}),
        },
      },
    })
    livrariaLivro: LivrariaLivro,
    @param.where(LivrariaLivro) where?: Where<LivrariaLivro>,
  ): Promise<Count> {
    return this.livrariaLivroRepository.updateAll(livrariaLivro, where);
  }

  @get('/livraria-livros/{id}', {
    responses: {
      '200': {
        description: 'LivrariaLivro model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(LivrariaLivro, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(LivrariaLivro, {exclude: 'where'}) filter?: FilterExcludingWhere<LivrariaLivro>
  ): Promise<LivrariaLivro> {
    return this.livrariaLivroRepository.findById(id, filter);
  }

  @patch('/livraria-livros/{id}', {
    responses: {
      '204': {
        description: 'LivrariaLivro PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LivrariaLivro, {partial: true}),
        },
      },
    })
    livrariaLivro: LivrariaLivro,
  ): Promise<void> {
    await this.livrariaLivroRepository.updateById(id, livrariaLivro);
  }

  @put('/livraria-livros/{id}', {
    responses: {
      '204': {
        description: 'LivrariaLivro PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() livrariaLivro: LivrariaLivro,
  ): Promise<void> {
    await this.livrariaLivroRepository.replaceById(id, livrariaLivro);
  }

  @del('/livraria-livros/{id}', {
    responses: {
      '204': {
        description: 'LivrariaLivro DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.livrariaLivroRepository.deleteById(id);
  }
}
