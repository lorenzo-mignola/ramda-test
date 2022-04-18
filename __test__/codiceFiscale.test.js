import { assert, expect } from 'chai';
import { slice } from 'ramda';
import { codiceFiscale } from '../lib/codiceFiscale/codiceFiscale.js';

const testSurexpectedName = slice(0, 3);
const testexpectedName = slice(3, 6);
const testNumberDate = slice(6, 8);
const testLetterMonth = slice(8, 9);
const testNumberDay = slice(9, 11);

describe('codiceFiscale surname', () => {
  it('should return 3 consonant', () => {
    const person = { name: null, surname: 'Newman', gender: null, dob: null };

    const codice = codiceFiscale(person);

    expect(testSurexpectedName(codice)).to.equal('NWM');
  });

  it('should return 3 consonant with vowels', () => {
    const person = { name: null, surname: 'Fox', gender: null, dob: null };

    const codice = codiceFiscale(person);

    expect(testSurexpectedName(codice)).to.equal('FXO');
  });

  it('should add 1 X', () => {
    const person = { name: null, surname: 'Yu', gender: null, dob: null };

    const codice = codiceFiscale(person);

    expect(testSurexpectedName(codice)).to.equal('YUX');
  });
});

describe('codiceFiscale name', () => {
  it('should return 3 consonant', () => {
    const person = { name: 'Matt', surname: null, gender: null, dob: null };

    const codice = codiceFiscale(person);

    expect(testexpectedName(codice)).to.equal('MTT');
  });

  it('should return 3 consonant from a name with more than 3 consonant', () => {
    const person = { name: 'Samantha', surname: null, gender: null, dob: null };

    const codice = codiceFiscale(person);

    expect(testexpectedName(codice)).to.equal('SNT');
  });

  it('should return 3 consonant with a vowel', () => {
    const person = { name: 'bob', surname: null, gender: null, dob: null };

    const codice = codiceFiscale(person);

    expect(testexpectedName(codice)).to.equal('BBO');
  });

  it('should add 1 X', () => {
    const person = { name: 'Al', surname: null, gender: null, dob: null };

    const codice = codiceFiscale(person);

    expect(testexpectedName(codice)).to.equal('LAX');
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

describe('test full expected', () => {
  const people = [
    {
      person: {
        name: 'Matt',
        surname: 'Edabit',
        gender: 'M',
        dob: '1/1/1900'
      },
      expected: 'DBTMTT00A01'
    },
    {
      person: {
        name: 'Helen',
        surname: 'Yu',
        gender: 'F',
        dob: '1/12/1950'
      },
      expected: 'YUXHLN50T41'
    },
    {
      person: {
        name: 'Mickey',
        surname: 'Mouse',
        gender: 'M',
        dob: '16/1/1928'
      },
      expected: 'MSOMKY28A16'
    },
    {
      person: {
        name: 'Brendan',
        surname: 'Eich',
        gender: 'M',
        dob: '1/12/1961'
      },
      expected: 'CHEBND61T01'
    },
    {
      person: { name: 'Helen', surname: 'Yu', gender: 'F', dob: '1/12/1950' },
      expected: 'YUXHLN50T41'
    },
    {
      person: {
        name: 'Mickey',
        surname: 'Mouse',
        gender: 'M',
        dob: '16/1/1928'
      },
      expected: 'MSOMKY28A16'
    },
    {
      person: { name: 'Al', surname: 'Capone', gender: 'M', dob: '17/1/1899' },
      expected: 'CPNLAX99A17'
    },
    {
      person: {
        name: 'Marie',
        surname: 'Curie',
        gender: 'F',
        dob: '7/11/1867'
      },
      expected: 'CRUMRA67S47'
    },
    {
      person: {
        name: 'Lorenzo',
        surname: 'Mignola',
        gender: 'M',
        dob: '31/5/1997'
      },
      expected: 'MGNLNZ97E31'
    }
  ];

  people.forEach(({ person, expected }) => {
    it(`correctly generate expected for ${person.name} ${person.surname}`, () => {
      const codice = codiceFiscale(person);
      assert.strictEqual(codice, expected);
    });
  });
});
