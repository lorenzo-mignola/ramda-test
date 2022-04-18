import { expect } from 'chai';
import { codiceFiscale } from '../lib/codiceFiscale.js';

describe('codiceFiscale', () => {
  it('should return 3 consonant', () => {
    const person = { name: 'Newman', surname: null, gender: null, dob: null };

    const codice = codiceFiscale(person);

    expect(codice).to.equal('NWM');
  });

  it('should return 3 consonant with vowels', () => {
    const person = { name: 'Fox', surname: null, gender: null, dob: null };

    const codice = codiceFiscale(person);

    expect(codice).to.equal('FXO');
  });

  it('should add 1 X', () => {
    const person = { name: 'Yu', surname: null, gender: null, dob: null };

    const codice = codiceFiscale(person);

    expect(codice).to.equal('YUX');
  });
});
