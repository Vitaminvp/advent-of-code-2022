//                     Rock  Paper Scissors
//                     A     B     C
const SHAPE_SCORES = { X: 1, Y: 2, Z: 3 };
const GAME_SCORES = {
  AX: 3,
  AY: 6,
  AZ: 0,
  BX: 0,
  BY: 3,
  BZ: 6,
  CX: 6,
  CY: 0,
  CZ: 3,
};

const solve = (input) => {
  return input.reduce((acc, curr) => {
    const [key1, key2] = curr.split(" ");

    return acc + GAME_SCORES[`${key1}${key2}`] + SHAPE_SCORES[key2];
  }, 0);
};

module.exports = {
  solve,
  result: 13924,
  exampleResult: 15,
};
