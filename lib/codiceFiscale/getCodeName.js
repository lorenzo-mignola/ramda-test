import { concat, equals, gt, length, nth } from 'ramda';
import {
  getCodeWithVowels,
  getVowelsAndConsonantsFromProp,
  getXPlaceholder,
  joinArrayToString
} from './util.js';

const CODE_LENGTH = 3;

const getCodeWithMoreThan3Consonants = consonants => {
  const firstChar = nth(0, consonants);
  const thirdChar = nth(2, consonants);
  const fourthChar = nth(3, consonants);

  return joinArrayToString([firstChar, thirdChar, fourthChar]);
};

export const getCodeName = person => {
  const { consonants, vowels } = getVowelsAndConsonantsFromProp('name')(person);

  const consonantsLength = length(consonants);

  if (equals(consonantsLength, CODE_LENGTH)) {
    return joinArrayToString(consonants);
  }

  if (gt(consonantsLength, CODE_LENGTH)) {
    return getCodeWithMoreThan3Consonants(consonants);
  }

  const codeWithConsonants = joinArrayToString(consonants);
  const codeWithVowels =
    getCodeWithVowels(CODE_LENGTH)(codeWithConsonants)(vowels);

  const codeName = concat(codeWithConsonants, codeWithVowels);

  return concat(codeName, getXPlaceholder(CODE_LENGTH)(codeName));
};
