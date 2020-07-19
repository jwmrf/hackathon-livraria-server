import {HttpErrors} from '@loopback/rest';
import isemail from 'isemail';
import {Credentials} from '../repositories';

export function validateCredentials(credentials: Credentials) {
  // Validate Email
  if (!isemail.validate(credentials.email)) {
    throw new HttpErrors.UnprocessableEntity('Email inválido');
  }

  // Validate Password Length
  if (!credentials.password || credentials.password.length < 8) {
    throw new HttpErrors.UnprocessableEntity(
      'Senha precisa de no mínimo 8 caracteres',
    );
  }
}
