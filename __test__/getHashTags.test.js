import { assert } from 'chai';
import { getHashTags } from '../lib/getHashTags.js';

describe('hashtag', () => {
  it('should return ["#avocado", "#became", "#global"]', () => {
    const expected = ['#avocado', '#became', '#global'];
    const headline = 'How the Avocado Became the Fruit of the Global Trade';

    const actual = getHashTags(headline);

    assert.sameMembers(actual, expected);
  });

  it('should return ["#christmas", "#probably", "#will"]', () => {
    const expected = ['#christmas', '#probably', '#will'];
    const headline =
      'Why You Will Probably Pay More for Your Christmas Tree This Year';

    const actual = getHashTags(headline);

    assert.sameMembers(actual, expected);
  });

  it('should return ["#surprise", "#parents", "#fruit"]', () => {
    const expected = ['#surprise', '#parents', '#fruit'];
    const headline = 'Hey Parents, Surprise, Fruit Juice Is Not Fruit';

    const actual = getHashTags(headline);

    assert.sameMembers(actual, expected);
  });

  it('should return ["#visualizing", "#science"]', () => {
    const expected = ['#visualizing', '#science'];
    const headline = 'Visualizing Science';

    const actual = getHashTags(headline);

    assert.sameMembers(actual, expected);
  });

  it('should return ["#minecraft", "#youtube", "#secrets"]', () => {
    const expected = ['#minecraft', '#youtube', '#secrets'];
    const headline = 'Minecraft Stars on Youtube Share Secrets to Their Fame';

    const actual = getHashTags(headline);

    assert.sameMembers(actual, expected);
  });

  it('should return ["#entrepreneur", "#elite", "#are"];', () => {
    const expected = ['#entrepreneur', '#elite', '#are'];
    const headline = 'Are You an Elite Entrepreneur?';

    const actual = getHashTags(headline);

    assert.sameMembers(actual, expected);
  });
});
