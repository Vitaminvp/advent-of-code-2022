const solve = input => {
    let max = 0;

    input.reduce((acc, curr) => {
        if(curr.length) {
            return acc + parseInt(curr, 10);
        }
        max = Math.max(max, acc);

        return 0;
    }, 0);

    return max;
};

module.exports = {
    solve,
    result: 68923,
    exampleResult: 63645
};
