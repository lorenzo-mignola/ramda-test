import { expect } from 'chai';
import { slice } from 'ramda';
import { codiceFiscale } from '../lib/codiceFiscale/codiceFiscale.js';

const testSurCodeName = slice(0, 3);
const testCodeName = slice(3, 6);
const testNumberDate = slice(6, 8);
const testLetterMonth = slice(8, 9);
const testNumberDay = slice(9, 11);

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

describe('codiceFiscale date', () => {
  it('should number birth', () => {
    const person = {
      name: null,
      surname: null,
      gender: null,
      dob: '"1/1/1985"'
    };

    const codice = codiceFiscale(person);

    expect(testNumberDate(codice)).to.equal('85');
  });

  it('should return letter of month January', () => {
    const person = {
      name: null,
      surname: null,
      gender: null,
      dob: '1/1/1985'
    };

    const codice = codiceFiscale(person);

    expect(testLetterMonth(codice)).to.equal('A');
  });

  it('should return letter of month December', () => {
    const person = {
      name: null,
      surname: null,
      gender: null,
      dob: '1/12/1985'
    };

    const codice = codiceFiscale(person);

    expect(testLetterMonth(codice)).to.equal('T');
  });

  it('should return 20 for male', () => {
    const person = {
      name: null,
      surname: null,
      gender: 'M',
      dob: '20/12/1985'
    };

    const codice = codiceFiscale(person);

    expect(testNumberDay(codice)).to.equal('20');
  });

  it('should return 09 for male', () => {
    const person = {
      name: null,
      surname: null,
      gender: 'M',
      dob: '09/12/1985'
    };

    const codice = codiceFiscale(person);

    expect(testNumberDay(codice)).to.equal('09');
  });

  it('should return 49 for female', () => {
    const person = {
      name: null,
      surname: null,
      gender: 'F',
      dob: '09/12/1985'
    };

    const codice = codiceFiscale(person);

    expect(testNumberDay(codice)).to.equal('49');
  });

  it('should return 60 for female', () => {
    const person = {
      name: null,
      surname: null,
      gender: 'F',
      dob: '20/12/1985'
    };

    const codice = codiceFiscale(person);

    expect(testNumberDay(codice)).to.equal('60');
  });
});
