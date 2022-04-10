const pairs = [
  [5, 6],
  [1, 3],
  [2, 3],
  [3, 6],
  [15, 12],
  [5, 7],
  [4, 5],
  [4, 9],
  [9, 12],
  [30, 16]
];

const getDifferenceArray = (arrA, arrB) => {
  return [...arrA].filter((element) => !arrB.includes(element));
};
const fn = (pairs) => {
  const parents = new Map();
  const children = new Map();
  for (const [parent, child] of pairs) {
    parents.has(parent)
      ? parents.set(parent, parents.get(parent) + 1)
      : parents.set(parent, 1);
    children.has(child)
      ? children.set(child, children.get(child) + 1)
      : children.set(child, 1);
  }
  const zeroParents = getDifferenceArray(
    [...parents.keys()],
    [...children.keys()]
  );
  const oneParents = getDifferenceArray([...parents.keys()], [...zeroParents]);
  const otherOneParents = [...children.entries()]
    .filter(({ 1: v }) => v === 1)
    .map(([k]) => k);
  return [
    zeroParents,
    Array.from(new Set([...oneParents, ...otherOneParents]))
  ];
};
console.log(fn(pairs));
