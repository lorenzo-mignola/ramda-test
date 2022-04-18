import { concat, pipe, slice } from 'ramda';
import {
  getCodeWithVowels,
  getVowelsAndConsonantsFromProp,
  getXPlaceholder,
  joinArrayToString
} from './util.js';

const CODE_LENGTH = 3;

const getNameCodeFromConsonants = pipe(
  slice(0, CODE_LENGTH),
  joinArrayToString
);

export const getCodeSurname = person => {
  const { consonants, vowels } =
    getVowelsAndConsonantsFromProp('surname')(person);
  const codeWithConsonants = getNameCodeFromConsonants(consonants);
  const codeWithVowels =
    getCodeWithVowels(CODE_LENGTH)(codeWithConsonants)(vowels);

  const codeSurname = concat(codeWithConsonants, codeWithVowels);
  return concat(codeSurname, getXPlaceholder(CODE_LENGTH)(codeSurname));
};
