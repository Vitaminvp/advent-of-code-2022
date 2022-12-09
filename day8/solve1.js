const { transpose } = require("../common/utils");

const solve = (input) => {
  const matrix = input.map((item) => {
    return item.split("");
  });
  const transposedMatrix = transpose(matrix);

  return matrix.reduce((acc, cur, row) => {
    let sum = 0;
    for (let col = 0; col < cur.length; col++) {
      const before = cur.slice(0, col);
      const after = cur.slice(col + 1);
      const above = transposedMatrix[col].slice(0, row);
      const under = transposedMatrix[col].slice(row + 1);

      if (!before.length || !after.length || !above.length || !under.length) {
        sum += 1;
        continue;
      }

      const visible = [before, after, above, under].some((list) => {
        return list.every((num) => num < cur[col]);
      });

      if (visible) {
        sum += 1;
      }
    }
    return acc + sum;
  }, 0);
};

module.exports = {
  solve,
  result: 1820,
  exampleResult: 21,
};
