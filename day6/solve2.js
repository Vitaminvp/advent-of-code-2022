const { isUnique } = require("../common/utils");
const solve = ([input]) => {
  const uniqChars = 14;
  let counter = [...input.substr(0, uniqChars)];

  for (let i = uniqChars; i < input.length; i++) {
    if (isUnique(counter)) {
      return i;
    }
    const [, ...rest] = counter;
    counter = [...rest, input[i]];
  }
};

module.exports = {
  solve,
  result: 2746,
  exampleResult: 29,
};
