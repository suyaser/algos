//top down fib
const fib = (n) => {
  if (n === 1 || n === 0) return n; //break condition

  return fib(n - 1) + fib(n - 2);
};

//top down memoization
const fibm = (n, memo = {}) => {
  if (n === 1 || n === 0) return n; //break condition
  if (!memo[n]) memo[n] = fibm(n - 1, memo) + fibm(n - 2, memo);
  return memo[n];
};

// bottom up
const fibu = (n) => {
  let r = 0;
  for (let i = 0; i <= n; i++) r += i;
  return r;
};

// bottom up memo
const fibum = (n) => {
  let memo = [0, 1];
  for (let i = 2; i < n; i++) memo[i] = memo[i - 1] + memo[i - 2];
  return memo[n - 1] + memo[n - 2];
};

// bottom up memo Opt
const fibumo = (n) => {
  let [a, b] = [0, 1];
  for (let i = 2; i < n; i++) {
    const x = b + a;
    a = b;
    b = x;
  }
  return a + b;
};

console.time('fib');
console.log(fib(10));
console.timeEnd('fib');
console.time('fib');
console.log(fibm(10));
console.timeEnd('fib');
console.time('fib');
console.log(fibu(10));
console.timeEnd('fib');
console.time('fib');
console.log(fibum(10));
console.timeEnd('fib');
console.time('fib');
console.log(fibumo(10));
console.timeEnd('fib');
