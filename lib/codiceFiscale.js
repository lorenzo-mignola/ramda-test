import {
  complement,
  concat,
  curry,
  filter,
  flip,
  includes,
  join,
  length,
  pipe,
  prop,
  repeat,
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

const getNameCodeFromConsonants = slice(0, 3);
const getNameCodeWithVowels = curry(consonants =>
  slice(0, subtract(3, length(consonants)))
);

export const codiceFiscale = person => {
  const { consonants, vowels } = getVowelsAndConsonantsFromName(person);
  const firstThreeConsonants = getNameCodeFromConsonants(consonants);
  const vowelsToAdd = getNameCodeWithVowels(firstThreeConsonants)(vowels);
  const codeName = concat(
    joinArrayToString(firstThreeConsonants),
    joinArrayToString(vowelsToAdd)
  );
  return concat(
    codeName,
    joinArrayToString(repeat('X', subtract(3, length(codeName))))
  );
};
