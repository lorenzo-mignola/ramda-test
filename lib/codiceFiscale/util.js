import {
  complement,
  curry,
  filter,
  flip,
  includes,
  join,
  length,
  pipe,
  propOr,
  repeat,
  slice,
  split,
  subtract,
  toUpper
} from 'ramda';

export const joinArrayToString = join('');
export const isVowel = flip(includes)(['A', 'E', 'I', 'O', 'U']);
export const isConsonants = complement(isVowel);

const getMissingChar = codeLength => partialCode =>
  subtract(codeLength, length(partialCode));

const getMissingVowels = codeLength => consonants =>
  slice(0, getMissingChar(codeLength)(consonants));

export const getCodeWithVowels = codeLength =>
  curry(consonants =>
    pipe(getMissingVowels(codeLength)(consonants), joinArrayToString)
  );

export const getXPlaceholder = codeLength => codeName =>
  joinArrayToString(repeat('X', getMissingChar(codeLength)(codeName)));

const splitNameFromPerson = prop => pipe(propOr('', prop), toUpper, split(''));

export const getVowelsAndConsonantsFromProp = prop => person => {
  const nameSplitted = splitNameFromPerson(prop)(person);
  return {
    consonants: filter(isConsonants, nameSplitted),
    vowels: filter(isVowel, nameSplitted)
  };
};
