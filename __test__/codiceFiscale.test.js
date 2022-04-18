import { expect } from 'chai';
import { slice } from 'ramda';
import { codiceFiscale } from '../lib/codiceFiscale/codiceFiscale.js';

const testSurCodeName = slice(0, 3);

describe('codiceFiscale', () => {
  it('should return 3 consonant', () => {
    const person = { name: null, surname: 'Newman', gender: null, dob: null };

    const codice = codiceFiscale(person);

    expect(testSurCodeName(codice)).to.equal('NWM');
  });

  it('should return 3 consonant with vowels', () => {
    const person = { name: null, surname: 'Fox', gender: null, dob: null };

    const codice = codiceFiscale(person);

    expect(testSurCodeName(codice)).to.equal('FXO');
  });

  it('should add 1 X', () => {
    const person = { name: null, surname: 'Yu', gender: null, dob: null };

    const codice = codiceFiscale(person);

    expect(testSurCodeName(codice)).to.equal('YUX');
  });
});
