import { getVowelsAndConsonantsFromProp, joinArrayToString } from './util.js';

export const getCodeName = person => {
  const { consonants } = getVowelsAndConsonantsFromProp('name')(person);

  return joinArrayToString(consonants);
};
