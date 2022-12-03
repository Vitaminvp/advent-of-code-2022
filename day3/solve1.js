const { isLowerCase } = require("../common/utils");

const solve = (input) => {
  return input.reduce((acc, str) => {
    const count = {};

    for (let i = 0; i < str.length / 2; i++) {
      const char = str[i];
      count[char] = count[char] ? count[char] + 1 : 1;
    }

    for (let i = str.length / 2; i < str.length; i++) {
      const char = str[i];

      if (count[char]) {
        const charCode = isLowerCase(char)
          ? char.charCodeAt(0) - 96
          : char.charCodeAt(0) - 38;

        return acc + charCode;
      }
    }

    return acc;
  }, []);
};

module.exports = {
  solve,
  result: 8185,
  exampleResult: 157,
};
