function solution(words, k) {
  let res = "";
  let length = 1;
  for (let widx = 0; widx < words.length; widx++) {
    let word = words[widx];
    for (let start = 0; start < word.length; start++) {
      for (let end = start + length; end <= word.length; end++) {
        let current = word.substring(start, end);
        let count = 0;
        for (let i = 0; i < words.length; i++) {
          if (words[i].includes(current)) {
            count++;
          }
          if (count >= k) {
            break;
          }
        }
        if (count >= k) {
          if (res.length < current.length) {
            res = current;
          }
          if (
            res.length === current.length &&
            res.localeCompare(current) >= 0
          ) {
            res = current;
          }
          length = res.length;
        }
      }
    }
  }
  return res;
}
console.log(
  `["dragon", "rage", "age", "savage"]: `,
  solution(["dragon", "rage", "age", "savage"], 2)
);
console.log(
  `["drakgon", "rakge", "age", "savage"]: `,
  solution(["drakgon", "rakge", "age", "savage"], 2)
);
