let str = "abcabcabcabc";

const longestRepeatedSubStr = (str) => {
  let left = "",
    right = "",
    found = "";
  for (let i = 0; i < str.length; i++) {
    let ltr = parseInt(str[i]);
    if (isNaN(ltr)) {
      left += str[i];
      right = str.substring(i + 1, str.length);
      if (right.includes(left)) {
        found = left;
      }
    }
  }
  return found;
};

console.log(longestRepeatedSubStr(str));
