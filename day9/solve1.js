const solve = (input) => {
  const movesHead = [{ x: 0, y: 0 }];
  const movesTail = [{ x: 0, y: 0 }];

  for (let i = 0; i < input.length; i++) {
    const [direction, moves] = input[i].split(" ");

    for (let j = 0; j < +moves; j++) {
      const prevHeadMove = movesHead[movesHead.length - 1];

      switch (direction) {
        case "R":
          movesHead.push({ x: prevHeadMove.x + 1, y: prevHeadMove.y });
          break;
        case "L":
          movesHead.push({ x: prevHeadMove.x - 1, y: prevHeadMove.y });
          break;
        case "U":
          movesHead.push({ x: prevHeadMove.x, y: prevHeadMove.y + 1 });
          break;
        case "D":
          movesHead.push({ x: prevHeadMove.x, y: prevHeadMove.y - 1 });
          break;
        default:
          throw Error("Something goes wrong!");
      }

      const currentHeadMove = movesHead[movesHead.length - 1];
      const prevTailMove = movesTail[movesTail.length - 1];

      // move horizontally
      if (
        Math.abs(currentHeadMove.x - prevTailMove.x) >= 2 &&
        currentHeadMove.y === prevTailMove.y
      ) {
        movesTail.push({
          x:
            currentHeadMove.x - prevTailMove.x > 0
              ? prevTailMove.x + 1
              : prevTailMove.x - 1,
          y: prevTailMove.y,
        });
      }

      // move vertically
      if (
        Math.abs(currentHeadMove.y - prevTailMove.y) >= 2 &&
        currentHeadMove.x === prevTailMove.x
      ) {
        movesTail.push({
          x: prevTailMove.x,
          y:
            currentHeadMove.y - prevTailMove.y > 0
              ? prevTailMove.y + 1
              : prevTailMove.y - 1,
        });
      }

      // move diagonally up
      if (
        (Math.abs(currentHeadMove.y - prevTailMove.y) >= 2 &&
          currentHeadMove.x !== prevTailMove.x) ||
        (Math.abs(currentHeadMove.x - prevTailMove.x) >= 2 &&
          currentHeadMove.y !== prevTailMove.y)
      ) {
        movesTail.push({
          x:
            currentHeadMove.x - prevTailMove.x > 0
              ? prevTailMove.x + 1
              : prevTailMove.x - 1,
          y:
            currentHeadMove.y - prevTailMove.y > 0
              ? prevTailMove.y + 1
              : prevTailMove.y - 1,
        });
      }
    }
  }

  const uniqMoves = movesTail.reduce((acc, curr) => {
    return acc.add(`${curr.x}:${curr.y}`);
  }, new Set());

  return uniqMoves.size;
};

module.exports = {
  solve,
  result: 6498,
  exampleResult: 13,
};
