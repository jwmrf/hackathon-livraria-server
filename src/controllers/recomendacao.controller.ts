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
import {Recomendacao} from '../models';
import {RecomendacaoRepository} from '../repositories';

export class RecomendacaoController {
  constructor(
    @repository(RecomendacaoRepository)
    public recomendacaoRepository : RecomendacaoRepository,
  ) {}

  @post('/recomendacoes', {
    responses: {
      '200': {
        description: 'Recomendacao model instance',
        content: {'application/json': {schema: getModelSchemaRef(Recomendacao)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Recomendacao, {
            title: 'NewRecomendacao',
            exclude: ['id'],
          }),
        },
      },
    })
    recomendacao: Omit<Recomendacao, 'id'>,
  ): Promise<Recomendacao> {
    return this.recomendacaoRepository.create(recomendacao);
  }

  @get('/recomendacoes/count', {
    responses: {
      '200': {
        description: 'Recomendacao model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Recomendacao) where?: Where<Recomendacao>,
  ): Promise<Count> {
    return this.recomendacaoRepository.count(where);
  }

  @get('/recomendacoes', {
    responses: {
      '200': {
        description: 'Array of Recomendacao model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Recomendacao, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Recomendacao) filter?: Filter<Recomendacao>,
  ): Promise<Recomendacao[]> {
    return this.recomendacaoRepository.find(filter);
  }

  @patch('/recomendacoes', {
    responses: {
      '200': {
        description: 'Recomendacao PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Recomendacao, {partial: true}),
        },
      },
    })
    recomendacao: Recomendacao,
    @param.where(Recomendacao) where?: Where<Recomendacao>,
  ): Promise<Count> {
    return this.recomendacaoRepository.updateAll(recomendacao, where);
  }

  @get('/recomendacoes/{id}', {
    responses: {
      '200': {
        description: 'Recomendacao model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Recomendacao, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Recomendacao, {exclude: 'where'}) filter?: FilterExcludingWhere<Recomendacao>
  ): Promise<Recomendacao> {
    return this.recomendacaoRepository.findById(id, filter);
  }

  @patch('/recomendacoes/{id}', {
    responses: {
      '204': {
        description: 'Recomendacao PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Recomendacao, {partial: true}),
        },
      },
    })
    recomendacao: Recomendacao,
  ): Promise<void> {
    await this.recomendacaoRepository.updateById(id, recomendacao);
  }

  @put('/recomendacoes/{id}', {
    responses: {
      '204': {
        description: 'Recomendacao PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() recomendacao: Recomendacao,
  ): Promise<void> {
    await this.recomendacaoRepository.replaceById(id, recomendacao);
  }

  @del('/recomendacoes/{id}', {
    responses: {
      '204': {
        description: 'Recomendacao DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.recomendacaoRepository.deleteById(id);
  }
}
