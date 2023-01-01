const { transpose } = require("../common/utils");

const solve = (input) => {
  const matrix = input.map((item) => {
    return item.split("");
  });

  const transposedMatrix = transpose(matrix);

  const viewTreesNum = matrix.reduce((acc, cur, row) => {
    const sumList = [];
    for (let col = 0; col < cur.length; col++) {
      const before = cur.slice(0, col).reverse();
      const after = cur.slice(col + 1);
      const above = transposedMatrix[col].slice(0, row).reverse();
      const under = transposedMatrix[col].slice(row + 1);

      const sum = [before, after, above, under].reduce((acc, next) => {
        const idx = next.findIndex((num) => num >= cur[col]);

        return acc * (idx >= 0 ? idx + 1 : next.length);
      }, 1);

      sumList.push(sum);
    }

    return [...acc, ...sumList];
  }, []);

  return Math.max(...viewTreesNum);
};

module.exports = {
  solve,
  result: 385112,
  exampleResult: 8,
};
