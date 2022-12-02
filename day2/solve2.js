//                     Rock  Paper Scissors
//                     Lose  Draw  Win
//                     A     B     C
const SHAPE_SCORES = { X: 1, Y: 2, Z: 3 };
const WIN_SCORES = { X: 0, Y: 3, Z: 6 };
const GAME_SCORES = {
  AX: "Z",
  BX: "X",
  CX: "Y",
  AY: "X",
  BY: "Y",
  CY: "Z",
  AZ: "Y",
  BZ: "Z",
  CZ: "X",
};

const solve = (input) => {
  return input.reduce((acc, curr) => {
    const [key1, key2] = curr.split(" ");
    const key3 = GAME_SCORES[`${key1}${key2}`];

    return acc + SHAPE_SCORES[key3] + WIN_SCORES[key2];
  }, 0);
};

module.exports = {
  solve,
  result: 13448,
  exampleResult: 12,
};
