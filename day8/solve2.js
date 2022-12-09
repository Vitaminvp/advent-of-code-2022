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

      let sum = 1;

      const beforeIndex = before.findIndex((num) => num >= cur[col]);

      sum *= beforeIndex >= 0 ? beforeIndex + 1 : before.length;

      const afterIndex = after.findIndex((num) => num >= cur[col]);

      sum *= afterIndex >= 0 ? afterIndex + 1 : after.length;

      const aboveIndex = above.findIndex((num) => num >= cur[col]);

      sum *= aboveIndex >= 0 ? aboveIndex + 1 : above.length;

      const underIndex = under.findIndex((num) => num >= cur[col]);

      sum *= underIndex >= 0 ? underIndex + 1 : under.length;

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
