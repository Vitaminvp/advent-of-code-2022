const { getUnique, getIntersection, isLowerCase } = require("../common/utils");

const solve = (input) => {
  return input
    .reduce((acc, str, i) => {
      const arrOfChars = str.split("");

      if (i % 3 !== 0) {
        const [fistArr, ...rest] = acc;
        const arrIntersect = getIntersection(fistArr, arrOfChars);

        return [getUnique(arrIntersect), ...rest];
      }
      return [arrOfChars, ...acc];
    }, [])
    .flat()
    .reduce((acc, char) => {
      const charCode = isLowerCase(char)
        ? char.charCodeAt(0) - 96
        : char.charCodeAt(0) - 38;

      return acc + charCode;
    }, 0);
};

module.exports = {
  solve,
  result: 2817,
  exampleResult: 70,
};
