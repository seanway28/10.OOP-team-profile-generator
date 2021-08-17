const Engineer = require('../lib/Player');

//  test for Engineer

test('creates an engineer object', () => {
    const engineer = new Engineer ('Sean', 3, 'seanway28@gmail.com');
  
    expect(engineer.name).toBe('Sean');
    
  
  });

//   const Potion = require('../lib/Potion');

// jest.mock('../lib/Potion');

// const Potion = require('../lib/Potion');

// jest.mock('../lib/Potion.js');

// console.log(new Potion());


// expect(player.inventory).toEqual(
//     expect.arrayContaining([expect.any(Object)])
//   );
  