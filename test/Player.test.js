const Player = require('../lib/Player');

// jest.mock('../lib/Potion');

test('creates a player object', () => {
    const player = new Player('Dave');
  
    expect(typeof(player)).toBe("object")
    // expect(player.name).toBe('Dave');
    // expect(player.health).toEqual(expect.any(Number));
    // expect(player.strength).toEqual(expect.any(Number));
    // expect(player.agility).toEqual(expect.any(Number));
    // expect(player.inventory).toEqual(
    //     expect.arrayContaining([expect.any(Object)])
    //   );
  });

//   const Potion = require('../lib/Potion');

// jest.mock('../lib/Potion');

// const Potion = require('../lib/Potion');

// jest.mock('../lib/Potion.js');

// console.log(new Potion());


// expect(player.inventory).toEqual(
//     expect.arrayContaining([expect.any(Object)])
//   );
  