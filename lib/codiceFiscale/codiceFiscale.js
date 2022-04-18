import { getCodeSurname } from './getCodeSurname.js';

export const codiceFiscale = person => {
  const codeSurname = getCodeSurname(person);
  return codeSurname;
};
