// What will be the output of the following code?

(function() {
  console.log(1);
  setTimeout(function(){console.log(2)}, 500);
  setTimeout(function(){console.log(3)}, 0);
  console.log(4);
})();
//  output: 1 4 3 2


(function(x) {
  return (function(y) {
    console.log(x);
  })(2)
})(1);

// output: 1


const hero = {
  _name: "John Doe",
  getSecretIdentity: function () {
    return this._name;
  }
};

const stoleSecretIdentity = hero.getSecretIdentity;
console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());

// undefined
// John Doe

const myArr = ["foo", "bar", "baz"];
myArr.length = 0;
myArr.push("bin");
console.log(myArr);

// ["bin"]


var variable_1 = 10;
let variable_2 = 20;

(() => {
  variable_1 = 15;
  let variable_2 = 25;
  const variable_3 = 30;

  console.log(variable_1);
  console.log(variable_2);
  console.log(variable_3);
})();

console.log(variable_1);
console.log(variable_2);
console.log(variable_3);

// Output:
// 15
// 25
// 30
// 15
// 20
// Uncaught ReferenceError: variable_3 is not defined
