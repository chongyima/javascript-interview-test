function prefix(size) {
  if (Number.isInteger(size) && size > 0) {
    return (str) => str.substring(0, size);
  } else {
    return prefix;
  }
}
// 1 right
// console.log(prefix(1024)("CodeSignal"));
// console.log(prefix()(-2)(4)("CodeSignal"));

// 2 no
// const func1 = prefix(-2);
// const func2 = prefix(4);
// console.log(func1("CodeSignal"));
// console.log(func2("CodeSignal"));

// 3 right
console.log(prefix(64)("CodeSignal"));
console.log(prefix()(4)("CodeSignal"));
