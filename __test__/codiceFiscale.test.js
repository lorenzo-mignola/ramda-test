import { expect } from 'chai';
import { slice } from 'ramda';
import { codiceFiscale } from '../lib/codiceFiscale/codiceFiscale.js';

const testSurCodeName = slice(0, 3);
const testCodeName = slice(3, 6);

describe('codiceFiscale surname', () => {
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

describe('codiceFiscale name', () => {
  it('should return 3 consonant', () => {
    const person = { name: 'Matt', surname: null, gender: null, dob: null };

    const codice = codiceFiscale(person);

    expect(testCodeName(codice)).to.equal('MTT');
  });

  it('should return 3 consonant from a name with more than 3 consonant', () => {
    const person = { name: 'Samantha', surname: null, gender: null, dob: null };

    const codice = codiceFiscale(person);

    expect(testCodeName(codice)).to.equal('SNT');
  });

  it('should return 3 consonant with a vowel', () => {
    const person = { name: 'bob', surname: null, gender: null, dob: null };

    const codice = codiceFiscale(person);

    expect(testCodeName(codice)).to.equal('BBO');
  });

  it('should add 1 X', () => {
    const person = { name: 'Al', surname: null, gender: null, dob: null };

    const codice = codiceFiscale(person);

    expect(testCodeName(codice)).to.equal('LAX');
  });
});
