// find out the index of element whose sum of leftside eqauls to sum of right side in array.
const getMiddleIdx = (arr) => {
  if (arr.length<3) return -1
  let sumLeft = 0;
  let sumRight = 0;
  let left = -1;
  let right = arr.length;
  while (left < right) {
    if (sumLeft > sumRight) {
      right--
      sumRight += arr[right]
    } else if (sumLeft < sumRight) {
      left++
      sumLeft += arr[left]
    } else {
      left++
      right--
      sumRight += arr[right]
      sumLeft += arr[left]
    }
  }
  if (sumLeft === sumRight) return left
  else return -1;
}

console.log(getMiddleIdx([5, 8, 3, 6, 12, 4]))