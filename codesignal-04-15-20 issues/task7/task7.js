const object = {
  number: 5,
  name: "object"
};
console.log("before", object);
// 1
// function increaseNumber(obj) {
//   const tmp = { ...obj };
//   tmp.number++;
//   return tmp;
// }

// function doTwice(arg, doSomething) {
//   doSomething(arg);
//   return doSomething(arg);
// }

// object = doTwice(object, increaseNumber);

// 2 right
// function increaseNumber(obj) {
//   obj.number++;
// }
// function doTwice(args, doSomething) {
//   doSomething(args);
//   doSomething(args);
// }
// doTwice(object, increaseNumber);
// console.log(object);

// 3
function increaseNumber(obj) {
  obj.number++;
  return obj;
}
function doTwice(args, doSomething) {
  doSomething(doSomething(args));
}
doTwice(object, increaseNumber);
console.log(object);
