function sum(...values) {
  return values.reduce((x, y) => x + y, this.number);
}

const object = {
  number: 10,
  mul: function (...values) {
    let result = this.number;
    values.forEach((value) => (result *= value));
    return result;
  }
};

const objectMul = object.mul;
/* console.log(objectMul) */
console.log(sum.apply(object, [90, 0, 0]));
console.log(objectMul(2,5));
console.log(object.mul.call(object, 2,5));
