const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {
  describe('#add', () => {
    it('should add two numbers', () => {
      var res = utils.add(33, 11);

      expect(res)
        .toBe(44)
        .toBeA('number');

      // if (res !== 44) {
      //   throw new Error(`Expected 44, but got ${res}.`);
      // }
    });

    it('should add two numbers async', done => {
      utils.addAsync(33, 11, res => {
        expect(res)
          .toBe(44)
          .toBeA('number');
        done();
      });
    });
  });
  describe('#square', () => {
    it('should square a number', () => {
      var res = utils.square(3);

      expect(res)
        .toBe(9)
        .toBeA('number');

      // if (res !== 9) {
      //   throw new Error(`Expected 9, but got ${res}.`);
      // }
    });

    it('should square a number async', done => {
      utils.squareAsync(3, res => {
        expect(res)
          .toBe(9)
          .toBeA('number');
        done();
      });
    });
  });
});

// it('should expect some values', () => {
//   // expect(12).toNotBe(12);
//   // expect({ nome: 'Weslley' }).toEqual({ nome: 'Weslley' });
//   // expect([2, 3, 4]).toInclude(3);
//   expect({
//     name: 'Weslley',
//     age: 21,
//     location: 'Brazil'
//   }).toInclude({ age: 21 });
// });

// it('should split fullname into user object', () => {
//   const user = utils.setName(
//     {
//       age: 21,
//       location: 'Brazil'
//     },
//     'Weslley Rocha'
//   );
//   expect(user).toInclude({ firstName: 'Weslley', lastName: 'Rocha' });
// });
