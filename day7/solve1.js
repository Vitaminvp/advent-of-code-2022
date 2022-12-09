const { isIntNum } = require("../common/utils");

const solve = (input) => {
  let prevDir = null;

  return input
    .reduce((acc, cur) => {
      const [command, second, folder] = cur.split(" ");

      if (command === "$" && second === "cd") {
        if (folder === "..") {
          prevDir = prevDir.prev;

          return acc;
        }
        const curr = {
          prev: prevDir,
          sum: 0,
        };
        prevDir = curr;

        return [...acc, curr];
      }

      if (isIntNum(command)) prevDir.sum += +command;

      return acc;
    }, [])
    .map((folder) => {
      let prevFolder = folder.prev;

      while (prevFolder) {
        prevFolder.sum += folder.sum;
        prevFolder = prevFolder.prev;
      }
      return folder;
    })
    .reduce((acc, { sum }) => (sum <= 100000 ? acc + sum : acc), 0);
};

module.exports = {
  solve,
  result: 1886043,
  exampleResult: 95437,
};
