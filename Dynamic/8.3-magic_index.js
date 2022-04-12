/*
    a magic index in an array a[0...n-1] is defined to be an index such that a[i]=i
    Given a sorted array of distinct integers, write a method to find a magic index, if one exists,
    in array A.
    FOLLOW UP
    What if the values are not distinct?
*/

const magic = (arr, start = 0, end = arr.length - 1) => {
  if (end < start) return -1;
  const mid = Math.floor((end + start) / 2);
  if (arr[mid] === mid) return mid;
  else if (arr[mid] < mid) return magic(arr, mid + 1, end);
  else return magic(arr, start, mid - 1);
};

console.log(magic([-40, -20, -1, 1, 2, 3, 5, 7, 9, 12, 13]));

const magicDistinct = (arr, start = 0, end = arr.length - 1) => {
  if (end < start) return -1;
  const mid = Math.floor((end + start) / 2);
  if (arr[mid] === mid) return mid;
  const leftValue = magicDistinct(arr, mid + 1, Math.min(end, arr[mid]));
  if (leftValue >= 0) return leftValue;
  return magicDistinct(arr, Math.min(start, arr[mid]), mid - 1);
};

console.log(magicDistinct([-10, -5, 2, 2, 2, 3, 4, 5, 9, 12, 13]));
