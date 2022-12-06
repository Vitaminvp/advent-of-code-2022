const fs = require("fs");

const solve = (day, task, example) => {
  const startTime = new Date();
  const solver = require(`./../day${day}/solve${task}`);
  const text = fs
    .readFileSync(
      `${__dirname}/../day${day}/${example ? "example" : "input"}.txt`
    )
    .toString()
    .replace(/\n+$/, "")
    .split("\n");

  const result = solver.solve(text, example);
  const endTime = new Date();
  const timeDiff = (endTime - startTime) / 1000;
  const expected = example ? solver.exampleResult : solver.result;
  const check = expected === result;
  const exampleStr = example ? `,EXAMPLE ${example}` : "";
  console.log(
    check ? "\u2705" : "\u274C",
    `DAY ${day}, TASK ${task} ${exampleStr}`
  );
  console.log("\u23F0", `${timeDiff}s`);
  console.log("\uD83C\uDFC1", result);
  console.log("-----------------");
  return { result, check };
};

const isLowerCase = (char) => char === char.toLowerCase();
const getIntersection = (arr1, arr2) =>
  arr1.filter((val) => arr2.includes(val));
const getUnique = (arr) => [...new Set(arr)];

const isUnique = (array) => {
  return new Set(array).size === array.length;
};

module.exports = {
  solve,
  isLowerCase,
  getIntersection,
  getUnique,
  isUnique,
};
