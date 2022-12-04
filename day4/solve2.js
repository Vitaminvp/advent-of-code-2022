const solve = (input) => {
  return input.reduce((acc, pair) => {
    const [first, second] = pair.split(",");
    const [firstStart, firstEnd] = first.split("-");
    const [secondStart, secondEnd] = second.split("-");

    if (
      (Number(firstStart) <= Number(secondStart) &&
        Number(firstEnd) >= Number(secondStart)) ||
      (Number(firstStart) >= Number(secondStart) &&
        Number(firstStart) <= Number(secondEnd))
    ) {
      return acc + 1;
    }

    return acc;
  }, 0);
};

module.exports = {
  solve,
  result: 835,
  exampleResult: 4,
};
