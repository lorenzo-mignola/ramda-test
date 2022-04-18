import {
  concat,
  curry,
  filter,
  length,
  pipe,
  propOr,
  repeat,
  slice,
  split,
  subtract,
  toUpper
} from 'ramda';
import { isConsonants, isVowel, joinArrayToString } from './util.js';

const getMissingChar = partialCode => subtract(3, length(partialCode));

const splitSurnameFromPerson = pipe(propOr('', 'surname'), toUpper, split(''));

const getVowelsAndConsonantsFromSurname = person => {
  const nameSplitted = splitSurnameFromPerson(person);
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

export const getCodeSurname = person => {
  const { consonants, vowels } = getVowelsAndConsonantsFromSurname(person);
  const codeWithConsonants = getNameCodeFromConsonants(consonants);
  const codeWithVowels = getNameCodeWithVowels(codeWithConsonants)(vowels);

  const codeName = concat(codeWithConsonants, codeWithVowels);
  return concat(codeName, getXPlaceholder(codeName));
};
