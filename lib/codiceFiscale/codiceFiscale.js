import { concat } from 'ramda';
import { getCodeName } from './getCodeName.js';
import { getCodeSurname } from './getCodeSurname.js';

export const codiceFiscale = person => {
  const codeSurname = getCodeSurname(person);
  const codeName = getCodeName(person);
  return concat(codeSurname, codeName);
};
