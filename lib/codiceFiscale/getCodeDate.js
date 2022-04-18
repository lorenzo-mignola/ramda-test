import { join, propOr, slice, split } from 'ramda';

const monthsMap = {
  1: 'A',
  2: 'B',
  3: 'C',
  4: 'D',
  5: 'E',
  6: 'H',
  7: 'L',
  8: 'M',
  9: 'P',
  10: 'R',
  11: 'S',
  12: 'T'
};

export const getCodeDate = person => {
  const dateString = propOr('', 'dob', person);
  const [day = '', month = '', year = ''] = split('/', dateString);

  const yearNumber = slice(2, 4, year);
  const monthLetter = monthsMap[month];

  return join('', [yearNumber, monthLetter]);
};
