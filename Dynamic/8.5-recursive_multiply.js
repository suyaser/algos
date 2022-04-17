/*
    Write a recurive function to multiply two positive integers without using the * operator. 
    you can use addition, subtraction, and bit shifting, but you should minimize the number of those operations.
*/

const calc = (x, y) => {
  console.log('ping');
  if (y === 0) return 0;
  if (y < 0) return -x;
  return (x << 1) + calc(x, y - 2);
};

const calcs = (x, y) => {
  console.log(y);
  console.log('ping');
  const bigger = x > y ? x : y;
  const smaller = x < y ? x : y;
  if (smaller === 1) return bigger;
  if (smaller === 0) return 0;
  const half = smaller >> 1;
  const doubleSide = calcs(bigger, half) << 1;
  if (smaller % 2 === 0) return doubleSide;
  return doubleSide + bigger;
};

console.log(calc(40, 53));
console.log(calcs(40, 53));
