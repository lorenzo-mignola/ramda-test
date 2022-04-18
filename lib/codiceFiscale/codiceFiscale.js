import { getCodeName } from './getCodeName.js';

export const codiceFiscale = person => {
  const codeName = getCodeName(person);
  return codeName;
};
