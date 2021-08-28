const Engineer = require('../lib/Engineer');

//  Test for Engineer object

test('creates an engineer object', () => {
    const engineer = new Engineer ('Sean', 3, 'seanway28@gmail.com');
  
    expect(engineer.name).toBe('Sean');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.stringContaining('@'));
    expect(engineer.github).toEqual(expect.any(String));
});
// Test for Name
test ('gets name of engineer', () => {
    const engineer = new Engineer ('Sean', 3, 'seanway28@gmail.com');

    expect(engineer.getName()).toEqual('Sean');
});
// Test for id
test ('gets ID of engineer', () => {
    const engineer = new Engineer ('Sean', 3, 'seanway28@gmail.com');
  
});
// Test for email
test (' gets email of engineer', () => {
  const engineer = new Engineer ('Sean, 3, seanway28@gmail.com');

  expect(engineer.getEmail()).toEqual(expect.stringContaining ('@'));
});
// Test for Role
test ('gets role of engineer', () => {
  const engineer = new Engineer ('Sean', 3, 'seanway28@gmail.com');

});
// Test for gitHub - Role specific
test ('gets github username of engineer', () => {
  const engineer = new Engineer ('Sean', 3, 'seanway28@gmail.com');

  expect(engineer.getGitHub()).toEqual(expect.any(String));

});
