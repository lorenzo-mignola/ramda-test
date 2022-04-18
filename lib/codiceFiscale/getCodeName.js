import { filter, pipe, propOr, split, toUpper } from 'ramda';
import { isConsonants, isVowel, joinArrayToString } from './util.js';

const splitNameFromPerson = pipe(propOr('', 'name'), toUpper, split(''));

const getVowelsAndConsonantsFromName = person => {
  const nameSplitted = splitNameFromPerson(person);
  return {
    consonants: filter(isConsonants, nameSplitted),
    vowels: filter(isVowel, nameSplitted)
  };
};

export const getCodeName = person => {
  const { consonants } = getVowelsAndConsonantsFromName(person);

  return joinArrayToString(consonants);
};
