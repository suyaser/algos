/*
    Imagine a robot sitting on the upper left corner of a grid with r row and c columns.
    the robot can only move in two directions, right and down, but certain cells are "off limits" such that
    the robot cannot step on them.Design an algorithm to find a path for the robot from the top left to the
    bottom right.
*/

const func = (arr, i = 0, j = 0, memo = {}) => {
  const key = i + ',' + j;
  if (memo[key]) return memo[key];
  if (arr.length === i || arr[1].length === j) return 0;
  if (arr[i][j] === 0) return 0;
  if (arr.length - 1 === i || arr[1].length - 1 === j) return 1;

  memo[key] = func(arr, i + 1, j, memo) + func(arr, i, j + 1, memo);
  return memo[key];
};

console.log(
  func([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);

const grid = (i, j, memo = {}) => {
  const key = i + ',' + j;
  if (memo[key]) return memo[key];
  if (i === 0 || j === 0) return 0;
  if (i === 1 && j === 1) return 1;

  memo[key] = grid(i - 1, j, memo) + grid(i, j - 1, memo);
  return memo[key];
};

console.log(grid(10, 10));
