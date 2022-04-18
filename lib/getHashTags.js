import {
  concat,
  descend,
  length,
  map,
  pipe,
  slice,
  sort,
  split,
  toLower
} from 'ramda';

const splitWords = split(/\W+/);
const sortByMaxLength = sort(descend(length));
const firstThreeWords = slice(0, 3);
const addHashtag = map(concat('#'));
const lower = map(toLower);

export const getHashTags = headline => {
  return pipe(
    splitWords,
    sortByMaxLength,
    firstThreeWords,
    addHashtag,
    lower
  )(headline);
};
