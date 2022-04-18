import { join } from 'ramda';
import { getCodeDate } from './getCodeDate.js';
import { getCodeName } from './getCodeName.js';
import { getCodeSurname } from './getCodeSurname.js';

export const codiceFiscale = person => {
  const codeSurname = getCodeSurname(person);
  const codeName = getCodeName(person);
  const codeDate = getCodeDate(person);
  return join('', [codeSurname, codeName, codeDate]);
};
