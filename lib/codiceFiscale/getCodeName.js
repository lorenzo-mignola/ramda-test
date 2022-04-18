import { equals, length, nth } from 'ramda';
import { getVowelsAndConsonantsFromProp, joinArrayToString } from './util.js';

const getCodeConsonants = consonants => {
  const firstChar = nth(0, consonants);
  const thirdChar = nth(2, consonants);
  const fourthChar = nth(3, consonants);

  return joinArrayToString([firstChar, thirdChar, fourthChar]);
};

export const getCodeName = person => {
  const { consonants } = getVowelsAndConsonantsFromProp('name')(person);

  if (equals(3, length(consonants))) {
    return joinArrayToString(consonants);
  }

  const codeWithConsonants = getCodeConsonants(consonants);

  return codeWithConsonants;
};
