class Calculator {
  constructor(startingValue = 0) {
    this.value = startingValue;
  }
  result() {
    return this.value;
  }
}

Calculator.prototype.add = function (number) {
  this.value += number;
  console.log(this.result());
  return this;
};

Calculator.prototype.multiply = function (number) {
  this.value *= number;
  console.log(this.result());
  return this;
};

Calculator.prototype.do = function (operation, number) {
  if (operation === "+") {
    this.add(number);
    // return this;
  } else if (operation === "*") {
    this.multiply(number);
    // return this;
  }
};
const calc = new Calculator(0);
calc.do("+", 2).add(2).do("*", 2).multiply(2);
