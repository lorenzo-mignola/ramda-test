import {
  complement,
  filter,
  flip,
  includes,
  join,
  pipe,
  propOr,
  split,
  toUpper
} from 'ramda';

export const joinArrayToString = join('');
export const isVowel = flip(includes)(['A', 'E', 'I', 'O', 'U']);
export const isConsonants = complement(isVowel);

const splitNameFromPerson = prop => pipe(propOr('', prop), toUpper, split(''));

export const getVowelsAndConsonantsFromProp = prop => person => {
  const nameSplitted = splitNameFromPerson(prop)(person);
  return {
    consonants: filter(isConsonants, nameSplitted),
    vowels: filter(isVowel, nameSplitted)
  };
};
