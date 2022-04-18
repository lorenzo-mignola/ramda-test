import {
  complement,
  concat,
  filter,
  flip,
  includes,
  join,
  length,
  pipe,
  prop,
  slice,
  split,
  subtract,
  toUpper
} from 'ramda';

const isVowel = flip(includes)(['A', 'E', 'I', 'O', 'U']);
const isConsonants = complement(isVowel);
const joinArrayToString = join('');

const splitNameFromPerson = pipe(prop('name'), toUpper, split(''));

const getVowelsAndConsonantsFromName = person => {
  const nameSplitted = splitNameFromPerson(person);
  return {
    consonants: filter(isConsonants, nameSplitted),
    vowels: filter(isVowel, nameSplitted)
  };
};

export const codiceFiscale = person => {
  const { consonants, vowels } = getVowelsAndConsonantsFromName(person);
  const firstThreeName = slice(0, 3, consonants);
  const otherVowels = slice(0, subtract(3, length(firstThreeName)), vowels);
  return concat(
    joinArrayToString(firstThreeName),
    joinArrayToString(otherVowels)
  );
};
