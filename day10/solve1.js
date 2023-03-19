const getStrength = (cycle, X) => {
  const cycles = [20, 60, 100, 140, 180, 220];
  const isProperStrength = cycles.some((num) => num === cycle);

  return isProperStrength ? cycle * X : 0;
};

const INIT = {
  X: 1,
  cycle: 0,
  strength: 0,
};

const solve = (input) => {
  return input.reduce(({ cycle, X, strength }, cur) => {
    const [instruction, value] = cur.split(" ");

    if (instruction === "noop") {
      return {
        X,
        cycle: cycle + 1,
        strength: strength + getStrength(cycle + 1, X),
      };
    }

    if (instruction === "addx") {
      return {
        cycle: cycle + 2,
        X: X + +value,
        strength:
          strength + getStrength(cycle + 1, X) + getStrength(cycle + 2, X),
      };
    }
  }, INIT).strength;
};

module.exports = {
  solve,
  result: 15360,
  exampleResult: 13140,
};
