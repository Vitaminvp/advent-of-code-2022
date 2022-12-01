const solve = (input) => {
  return input
    .reduce(
      (acc, curr) => {
        if (curr.length) {
          const [first, ...rest] = acc;

          return [first + parseInt(curr, 10), ...rest];
        }
        return [0, ...acc];
      },
      [0]
    )
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((acc, curr) => acc + curr);
};

module.exports = {
  solve,
  result: 200044,
  exampleResult: 165077,
};
