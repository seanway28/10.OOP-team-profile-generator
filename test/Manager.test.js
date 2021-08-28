const Manager = require ('../lib/Manager');

// Test for manager object
test ('creates a manager object', () => {
  const manager = new Manager('Dan', 2, 'Dan28@icloud.com');

  expect(manager.name).toBe('Dan');
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.stringContaining('@'));
  expect(manager.github).toEqual(expect.any(String));
});
//Test for Name
test ('gets name of manager', () => {
    const manager = new Manager('Dan', 2, 'Dan28@icloud.com');

    expect(manager.getName()).toEqual('Dan');
});
// Test for id
test ('gets id of manager', () => {
    const manager = new Manager('Dan', 2, 'Dan28@icloud.com');

    expect(manager.getId()).toBe(2);
});
// Test for email
test ('gets email of manager', () => {
    const manager = new Manager('Dan', 2, 'Dan28@icloud.com');

    expect(manager.getEmail()).toEqual(expect.stringContaining('@'));
});
// Test for role
test ('gets role of manager', () => {
    const manager = new Manager('Dan', 2, 'Dan28@icloud.com');

    expect(manager.getRole()).toEqual('Manager');
});























// const checkIfEqual = require('../lib/random.js');

// test('checks if 10 is equal to 10', () => {
//   expect(checkIfEqual(10, 10)).toBe(true);
// });

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
