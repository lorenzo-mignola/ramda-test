import { concat, curry, length, pipe, repeat, slice, subtract } from 'ramda';
import { getVowelsAndConsonantsFromProp, joinArrayToString } from './util.js';

const getMissingChar = partialCode => subtract(3, length(partialCode));

const getMissingVowels = consonants => slice(0, getMissingChar(consonants));
const getXPlaceholder = codeName =>
  joinArrayToString(repeat('X', getMissingChar(codeName)));

const getNameCodeFromConsonants = pipe(slice(0, 3), joinArrayToString);
const getNameCodeWithVowels = curry(consonants =>
  pipe(getMissingVowels(consonants), joinArrayToString)
);

export const getCodeSurname = person => {
  const { consonants, vowels } =
    getVowelsAndConsonantsFromProp('surname')(person);
  const codeWithConsonants = getNameCodeFromConsonants(consonants);
  const codeWithVowels = getNameCodeWithVowels(codeWithConsonants)(vowels);

  const codeName = concat(codeWithConsonants, codeWithVowels);
  return concat(codeName, getXPlaceholder(codeName));
};
