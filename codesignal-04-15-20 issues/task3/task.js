function colorFence(length) {
  let fenceArr = new Array(length).fill(0);
  return function colorIntervals(left, right) {
    for (let i = 0; i < length; i++) {
      if (i >= left && i < right && fenceArr[i] === 0) {
        fenceArr[i] = 1;
      }
    }
    // console.log(fenceArr);
    return fenceArr.filter((item) => item === 0).length;
  };
}

const colorIntervals = colorFence(20);

console.log(colorIntervals(18, 18));
console.log(colorIntervals(0, 3));
console.log(colorIntervals(17, 19));
console.log(colorIntervals(0, 19));
