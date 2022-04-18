import { complement, flip, includes, join } from 'ramda';

export const joinArrayToString = join('');
export const isVowel = flip(includes)(['A', 'E', 'I', 'O', 'U']);
export const isConsonants = complement(isVowel);
