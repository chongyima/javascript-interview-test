function equilibriumPoint(arr) {
  let i = 0,
    start = 0,
    end = arr.length - 1,
    left_sum = 0,
    right_sum = 0;
  for (i = 0; i < arr.length; i++) {
    if (start === end && right_sum === left_sum) return start;
    if (start === end) return -1;
    if (left_sum > right_sum) {
      right_sum += arr[end];
      end--;
    } else if (right_sum > left_sum) {
      left_sum += arr[start];
      start++;
    } else {
      right_sum += arr[end];
      end--;
    }
  }
  if (!i) {
    return 0;
  }
}
let arr = [1, 2, 3, 3];
console.log(equilibriumPoint(arr));
