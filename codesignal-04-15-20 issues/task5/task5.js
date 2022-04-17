function decreaseByOne(arr) {
  let newArr = arr;
  // const newArr = [...arr];
  // const newArr = JSON.parse(JSON.stringify(arr));
  newArr[0]--;
  newArr[1]--;
  return newArr;
}

function sumOfFour(arr1, arr2) {
  return arr1[0] + arr1[1] + arr2[0] + arr2[1];
}

const arr1 = [1, 1];
const arr2 = decreaseByOne(arr1);
console.log(sumOfFour(arr1, arr2));

console.log(arr1);
console.log(arr2);