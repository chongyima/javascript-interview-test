// Given an array of integers, return an array of integers which contains
// [1st integer, Sum of next 2 integers (2nd, 3rd), Sum of next 3 integers (4th, 5th, 6th)]
// Input size n
// [1,6,8,5,9,4,7,2]
// Output size m
// [1,14,18,9]
// Solution:
function func(arr) {
  let step = 0;
  const newArr = [];
  while (arr.length > 0) {
    let sum = 0;
    for (let i = 0; i <= step; i++) {
      if (arr.length > 0) {
        sum += arr.shift();
      } else {
        break;
      }
    }
    newArr.push(sum);
    step++;
  }
  return newArr;
}

console.log(func([1, 6, 8, 5, 9, 4, 7, 2, 3, 4, 6]));