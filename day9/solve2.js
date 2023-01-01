const getHeadMove = (prevMove, direction) => {
  switch (direction) {
    case "R":
      return { x: prevMove.x + 1, y: prevMove.y };
    case "L":
      return { x: prevMove.x - 1, y: prevMove.y };
    case "U":
      return { x: prevMove.x, y: prevMove.y + 1 };
    case "D":
      return { x: prevMove.x, y: prevMove.y - 1 };
    default:
      throw Error("Something goes wrong!");
  }
};

const getTailMove = (currentHeadMove, prevTailMove) => {
  // move horizontally
  if (
    Math.abs(currentHeadMove.x - prevTailMove.x) >= 2 &&
    currentHeadMove.y === prevTailMove.y
  ) {
    return {
      x:
        currentHeadMove.x - prevTailMove.x > 0
          ? prevTailMove.x + 1
          : prevTailMove.x - 1,
      y: prevTailMove.y,
    };
  }

  // move vertically
  if (
    Math.abs(currentHeadMove.y - prevTailMove.y) >= 2 &&
    currentHeadMove.x === prevTailMove.x
  ) {
    return {
      x: prevTailMove.x,
      y:
        currentHeadMove.y - prevTailMove.y > 0
          ? prevTailMove.y + 1
          : prevTailMove.y - 1,
    };
  }

  // move diagonally up
  if (
    (Math.abs(currentHeadMove.y - prevTailMove.y) >= 2 &&
      currentHeadMove.x !== prevTailMove.x) ||
    (Math.abs(currentHeadMove.x - prevTailMove.x) >= 2 &&
      currentHeadMove.y !== prevTailMove.y)
  ) {
    return {
      x:
        currentHeadMove.x - prevTailMove.x > 0
          ? prevTailMove.x + 1
          : prevTailMove.x - 1,
      y:
        currentHeadMove.y - prevTailMove.y > 0
          ? prevTailMove.y + 1
          : prevTailMove.y - 1,
    };
  }
  return null;
};

const knots = 10;

const solve = (input) => {
  const movesList = Array.from({ length: knots }, () => [{ x: 0, y: 0 }]);

  for (let i = 0; i < input.length; i++) {
    const [direction, moves] = input[i].split(" ");

    for (let j = 0; j < +moves; j++) {
      const head = movesList[0];
      const prevHeadMove = head[head.length - 1];

      movesList[0] = [...head, getHeadMove(prevHeadMove, direction)];

      for (let k = 1; k < movesList.length; k++) {
        const movesHead = movesList[k - 1];
        const movesTail = movesList[k];
        const currentHeadMove = movesHead[movesHead.length - 1];
        const prevTailMove = movesTail[movesTail.length - 1];

        const nextMove = getTailMove(currentHeadMove, prevTailMove);

        movesList[k] = [...movesList[k], ...(nextMove ? [nextMove] : [])];
      }
    }
  }

  const uniqMoves = movesList[movesList.length - 1].reduce((acc, curr) => {
    return acc.add(`${curr.x}:${curr.y}`);
  }, new Set());

  return uniqMoves.size;
};

module.exports = {
  solve,
  result: 2531,
  exampleResult: 36,
};
