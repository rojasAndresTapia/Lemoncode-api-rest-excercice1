import Axios from 'axios';
import { ICharacter } from './api-model';
// import { Lookup } from 'common/models';

const apiUrl = '/api/characters';

export const api = () => Axios.get(apiUrl).then((res) => res);

export const saveSentences = async (
  character: ICharacter
): Promise<boolean> => {
  if (character.id) {
    await Axios.put<ICharacter>(`${apiUrl}/${character.id}`, character);
  } else {
    return;
  }
};
