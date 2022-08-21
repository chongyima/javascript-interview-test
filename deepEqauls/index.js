function deepEquals(valueOne, valueTwo) {
  if (typeof valueOne !== 'object' && typeof valueTwo !== 'object') {
    const isValueOneNaN = isNaN(valueOne) && typeof valueOne === 'number';
    const isValueTwoNaN = isNaN(valueTwo) && typeof valueTwo === 'number';
    if (isValueOneNaN && isValueTwoNaN) return true;

    return valueOne === valueTwo
  }

  if (typeof valueOne !== typeof valueTwo) return false;

  if (valueOne === null && valueTwo === null) return true;
  if (valueOne === null || valueTwo === null) return false;
  if (valueOne === valueTwo) return true;


  if (Array.isArray(valueOne) && Array.isArray(valueTwo)) {
    if (valueOne.length !== valueTwo.length) return false;
    for (let i = 0; i < valueOne.length; i++) {
      if (!deepEquals(valueOne[i], valueTwo[i])) return false
    }
    return true
  }

  if (Array.isArray(valueOne) || Array.isArray(valueTwo)) return false

  const valueOneKeys = Object.keys(valueOne);
  const valueTwoKeys = Object.keys(valueTwo);

  if (valueOneKeys.length !== valueTwoKeys.length) return false;
  if (!deepEquals(valueOneKeys, valueTwoKeys)) return false;

  for (let i = 0; i < valueOneKeys.length;i++) {
    const key = valueOneKeys[i];
    const valueOneValue = valueOne[key];
    const valueTwoValue = valueTwo[key];
    if(!deepEquals(valueOneValue, valueTwoValue)) return false;
  }

  return true;
}


console.log(deepEquals(1, 1));
console.log(deepEquals('a', 'a'));
console.log(deepEquals(NaN, NaN));
console.log(deepEquals([], []));
console.log(deepEquals([1], [1]));
console.log(deepEquals([[1,2],[3,4]], [[1,2],[3,4]]));
console.log(deepEquals({}, {}))
console.log(deepEquals({a:1}, {a:1}))
console.log(deepEquals({a:1, obj:{b:2}}, {a:1, obj:{b:2}}))
console.log(deepEquals(null, null))
console.log(deepEquals(undefined, undefined))
const array = new Array(100000).fill('a')
console.log(deepEquals(array, array))


console.log('=========== FALSE ==============');
console.log(deepEquals(1, 0));
console.log(deepEquals('a', 'b'));
console.log(deepEquals(NaN, 10));
console.log(deepEquals('NaN', NaN));
console.log(deepEquals([], 1));
console.log(deepEquals([], [1]));
console.log(deepEquals([1], [11]));
console.log(deepEquals([[1,2,3],[3,4]], [[1,2],[3,4]]));

console.log(deepEquals({a:1}, {}))
console.log(deepEquals({a:2}, {a:1}))
console.log(deepEquals({a:1, obj:{b:23}}, {a:1, obj:{b:2}}))
console.log(deepEquals({a:1, obj:{b:23}}, {a:1, obj:{b:2}, c:3}))

console.log(deepEquals(null, 1))
console.log(deepEquals("undefined", undefined))
const obj1 = {'a': undefined, 'b':2}
const obj2 = {'b': 2, 'c':3}
console.log(deepEquals(obj1, obj2))