import {
  concat,
  equals,
  join,
  length,
  lt,
  propOr,
  slice,
  split,
  when,
  __
} from 'ramda';

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

const isMale = person => equals(propOr('', 'gender', person), 'M');
const isFemale = person => equals(propOr('', 'gender', person), 'F');

// const normalizeDayForMale = day => 'M';
const normalizeDayForMale = when(day => lt(length(day), 2), concat('0', __));

const getNumberDay = person => {
  if (isMale(person)) {
    return normalizeDayForMale;
  }
  if (isFemale(person)) {
    return () => 'F';
  }
  return () => 'I';
};

export const getCodeDate = person => {
  const dateString = propOr('', 'dob', person);
  const [day = '', month = '', year = ''] = split('/', dateString);

  const yearNumber = slice(2, 4, year);
  const monthLetter = monthsMap[month];
  const dayNumber = getNumberDay(person)(day);

  return join('', [yearNumber, monthLetter, dayNumber]);
};
