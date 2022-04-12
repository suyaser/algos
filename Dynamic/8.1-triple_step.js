/*
    A child is running up a chaircase with n steps and can hop either 1 step, 2 step, or 3 step
    at a time. Implement a method to count how many possibleways the child can run up the stairs.
*/

//bottom up is not optimal as it counts as i'm moving. top down sol is better with memoization

const stairs = (n, memo = {}) => {
  if (memo[n]) return memo[n];
  if (n === 0) return 1;
  if (n < 0) return 0;
  memo[n] = stairs(n - 1, memo) + stairs(n - 2, memo) + stairs(n - 3, memo);
  return memo[n];
};

console.time('testt');
console.log(stairs(10));
console.timeEnd('testt');
console.time('test');
console.log(stairs(50));
console.timeEnd('test');
