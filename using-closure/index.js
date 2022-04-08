function function1(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(function1(3)(3)(4));//output: 10
console.log(function1(5)(4)(4));//output: 13