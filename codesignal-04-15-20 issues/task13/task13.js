function integerConcatenation(a, b) {
  if (!Number.isInteger(a)) {
    throw "The first variable is not an integer";
  }
  if (!Number.isInteger(b)) {
    throw "The second variable is not an integer";
  }
  if (a === 0) {
    throw "The first variable is  zero.";
  }
  return a.toString() + b.toString();
}
let answer;
try {
  answer = integerConcatenation("0", 4);
} catch (err) {
  answer = err;
} finally {
  console.log(answer);
}

try {
  console.log(integerConcatenation(1, 11));
} catch (err) {
  console.log(err);
}
