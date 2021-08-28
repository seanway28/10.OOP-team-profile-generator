const Intern = require('../lib/Intern.js');
// Test for intern object
test('creates an intern object', () => {
    const intern = new Intern('Ben', 4, 'ben28@icloud.com');
  
    expect(intern.name).toBe('Ben');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.stringContaining('@'));
    expect(intern.github).toEqual(expect.any(String));
  });
// Test for Name
test('gets name of Intern', () => {
  const Intern = newIntern('Ben', 4, 'ben28@icloud.com');

    expect(intern.getName()).toBe('Ben');
});
// Test for id
test ('gets ID of intern', ()=> {
  const intern = new Intern('Ben', 4, 'ben28@icloud.com');

    expect(intern.getId()).toBe(4);
});
// Test for email
test ('gets email of intern', () => {
  const intern = new Intern('Ben', 4, 'ben28@icloud.com');

  expect(intern.getEmail()).toEqual(expect.stringContaining('@'));
});
// Test for role
test ('gets role of intern', () => {
  const intern = new Intern('Ben', 4, 'Ben28@icloud.com');

  expect(intern.getRole()).toEqual('Intern');
});
// Test for school - role specific
test ('creates an intern object', () => {
  const intern = new Intern('Ben', 4, 'Ben28@icloud.com');

  expect(intern.getSchool()).toEqual(expect.any(String));
});



// CLASS WORK
//   expect(potion.name).toEqual(expect.any(String));
//   expect(potion.name.length).toBeGreaterThan(0);
//   expect(potion.value).toEqual(expect.any(Number));
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

// module.exports = function() {
//   this.name = 'health';
//   this.value = 20;
// 