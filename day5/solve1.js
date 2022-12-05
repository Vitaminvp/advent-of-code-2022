const solve = (input) => {
  const splitIndex = input.indexOf("") - 1;
  const procedures = input
    .slice(splitIndex + 2)
    .map((str) => str.replace(/[a-z]/g, "").trim().split(/\s+/));

  const inputSchema = input
    .slice(0, splitIndex)
    .map((str) =>
      str
        .replace(/[\[\]]/g, "")
        .replace(/\s{4}/g, " ")
        .split(" ")
    )
    .reverse();

  const initReducer = inputSchema[0].length;

  const schema = inputSchema.reduce(
    (acc, cur, i) => {
      for (let j = 0; j <= initReducer; j++) {
        if (cur[j]) {
          acc[j][i] = cur[j];
        }
      }
      return acc;
    },
    Array.from({ length: initReducer }, () => [])
  );

  procedures.forEach(([count, from, to]) => {
    const fromStacks = schema[from - 1];
    const moved = fromStacks.splice(fromStacks.length - count, count);

    schema[to - 1].push(...moved.reverse());
  });

  return schema.reduce((acc, cur) => {
    return acc + cur[cur.length - 1];
  }, "");
};

module.exports = {
  solve,
  result: "LJSVLTWQM",
  exampleResult: "CMZ",
};
