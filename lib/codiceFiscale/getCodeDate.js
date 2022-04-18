import {
  add,
  always,
  concat,
  cond,
  equals,
  join,
  length,
  lt,
  pipe,
  propOr,
  slice,
  split,
  T,
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

const normalizeDayForMale = when(day => lt(length(day), 2), concat('0', __));
const normalizeDayForFemale = pipe(Number, add(40), String);

const getNumberDay = person =>
  cond([
    [() => isMale(person), normalizeDayForMale],
    [() => isFemale(person), normalizeDayForFemale],
    [T, always('')]
  ]);

export const getCodeDate = person => {
  const dateString = propOr('', 'dob', person);
  const [day = '', month = '', year = ''] = split('/', dateString);

  const yearNumber = slice(2, 4, year);
  const monthLetter = monthsMap[month];
  const dayNumber = getNumberDay(person)(day);

  return join('', [yearNumber, monthLetter, dayNumber]);
};
