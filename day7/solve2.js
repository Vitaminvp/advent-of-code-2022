const { isIntNum } = require("../common/utils");

const solve = (input) => {
  let prevDir = null;

  const folderFiles = input.reduce((acc, cur) => {
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

    if (isIntNum(command)) {
      prevDir.sum += +command;
    }
    return acc;
  }, []);

  folderFiles.forEach((folder) => {
    let prevFolder = folder.prev;

    while (prevFolder) {
      prevFolder.sum += folder.sum;
      prevFolder = prevFolder.prev;
    }
  });

  const result = folderFiles.map(({ sum }) => sum).sort((a, b) => b - a);

  const unUsed = 70000000 - result[0];

  if (unUsed > 30000000) return 0;

  const toDelete = 30000000 - unUsed;

  for (let i = 0; i < result.length; i++) {
    if (result[i] <= toDelete) return result[i - 1];
  }
};

module.exports = {
  solve,
  result: 3842121,
  exampleResult: 24933642,
};
