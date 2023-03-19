const INIT = {
  X: 1,
  cycle: 0,
  screen: "",
};

const getPixel = (cycle, X) => {
  if (cycle + 1 === 41 ) return "#";
  return cycle <= X + 1 && cycle >= X - 1 ? "#" : ".";
}
const getCycle = (cycle) => cycle === 40 ? 1 : cycle + 1

const solve = (input) => {
  return input.reduce(({ cycle, X, screen }, cur) => {
    const [instruction, value] = cur.split(" ");

    if (instruction === "noop") {
      return {
        X,
        cycle: getCycle(cycle),
        screen: screen + getPixel(cycle, X),
      };
    }

    if (instruction === "addx") {
      for (let i = 0; i < 2; i++) {
        screen += getPixel(cycle, X);
        cycle = getCycle(cycle);
      }
      return {
        cycle,
        X: X + +value,
        screen,
      };
    }
  }, INIT).screen.match(/.{1,40}/g).join("\n").replace(/^/,'\n');
};

module.exports = {
  solve,
  result: [
    '###..#..#.#....#..#...##..##..####..##..',
    '#..#.#..#.#....#..#....#.#..#....#.#..#.',
    '#..#.####.#....####....#.#......#..#..#.',
    '###..#..#.#....#..#....#.#.##..#...####.',
    '#....#..#.#....#..#.#..#.#..#.#....#..#.',
    '#....#..#.####.#..#..##...###.####.#..#.'
  ].join("\n").replace(/^/,'\n'),
  exampleResult: [
    '##..##..##..##..##..##..##..##..##..##..',
    '###...###...###...###...###...###...###.',
    '####....####....####....####....####....',
    '#####.....#####.....#####.....#####.....',
    '######......######......######......####',
    '#######.......#######.......#######.....'
  ].join("\n").replace(/^/,'\n'),
};
