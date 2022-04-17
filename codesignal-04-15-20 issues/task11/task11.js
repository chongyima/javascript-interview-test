const generateString = (function () {
  var callNumber = 0;
  return function () {
    if (callNumber % 2 === 0) {
      callNumber++;
      return "even";
    } else {
      callNumber++;
      return "odd";
    }
  };
})();
/* generateString(); */
console.log(generateString());
console.log(generateString());
