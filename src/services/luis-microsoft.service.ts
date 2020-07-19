import {HttpErrors} from '@loopback/rest';
import axios from 'axios';
const http = "https://luis-book-hack.cognitiveservices.azure.com/luis/prediction/v3.0/apps/d737ef8d-f143-4e55-a281-70394c8e84a7/slots/production/predict?subscription-key=fc8c42451f154881937ed162e8a9de8f&verbose=true&show-all-intents=true&log=true&query="

export function understadingText(message: String) {
  axios.get(http + message)
    .then(response => {
      return response.data.prediction;
    })
    .catch(error => {
      console.log(error);
      throw new HttpErrors.UnprocessableEntity(
        'Erro ao tentar se comunicar com Luis Microsoft',
      );
    });
}
