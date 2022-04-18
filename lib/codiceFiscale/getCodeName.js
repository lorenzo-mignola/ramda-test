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
const getMissingChar = partialCode => subtract(3, length(partialCode));

const splitNameFromPerson = pipe(prop('name'), toUpper, split(''));

const getVowelsAndConsonantsFromName = person => {
  const nameSplitted = splitNameFromPerson(person);
  return {
    consonants: filter(isConsonants, nameSplitted),
    vowels: filter(isVowel, nameSplitted)
  };
};

const getMissingVowels = consonants => slice(0, getMissingChar(consonants));
const getXPlaceholder = codeName =>
  joinArrayToString(repeat('X', getMissingChar(codeName)));

const getNameCodeFromConsonants = pipe(slice(0, 3), joinArrayToString);
const getNameCodeWithVowels = curry(consonants =>
  pipe(getMissingVowels(consonants), joinArrayToString)
);

export const getCodeName = person => {
  const { consonants, vowels } = getVowelsAndConsonantsFromName(person);
  const codeWithConsonants = getNameCodeFromConsonants(consonants);
  const codeWithVowels = getNameCodeWithVowels(codeWithConsonants)(vowels);

  const codeName = concat(codeWithConsonants, codeWithVowels);
  return concat(codeName, getXPlaceholder(codeName));
};
