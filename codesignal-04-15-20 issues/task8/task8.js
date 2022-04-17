const obj = {
  changeMul: function (mul) {
    this.mul = mul;
  },
  mul: function (a, b) {
    let res = 0;
    for (let i = 0; i < b; i++) {
      res += a;
    }
    return res;
  }
};

function newMul(a, b) {
  return a * b;
}

// TODO: your code goes here
obj.changeMul = function (callback) {
  this.mul = function (a, b) {
    return callback(a, b);
  };
};
obj.changeMul(newMul);

const mul = obj.mul;
if (mul(3, 5) === 15) {
  console.log("Good");
} else {
  console.log("Bad");
}
