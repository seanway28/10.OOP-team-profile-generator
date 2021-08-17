const checkIfEqual = require('../lib/random.js');

test('checks if 10 is equal to 10', () => {
  expect(checkIfEqual(10, 10)).toBe(true);
});

// function Potion(name) {
//   this.types = ['strength', 'agility', 'health'];
//   this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

//   if (this.name === 'health') {
//     this.value = Math.floor(Math.random() * 10 + 30);
//   } else {
//     this.value = Math.floor(Math.random() * 5 + 7);
//   }
// }

// module.exports = Potion;
