// ** Question 1
// Given an array of strings such as
// ["A", "B", "C"]
// return an array of objects such as
// [ {"name": "A"}, {"name": "B"}, {"name": "C"} ]

// solution
console.log(["A", "B", "C"].reduce((pre, cur) => [...pre, {"name": cur}],[]))

// ** Question 2
// Given an array of string, such as
// ["A", "B", "C", "Z", "Q"]
// return an object such as
// { "A": 0, "B": 1, "C": 2, "Z" : 3, "Q": 4 }
// The numbers here are the positions of the string in the input array.

// solution
console.log(["A", "B", "C", "Z", "Q"].reduce((pre, cur, index) => {
  pre[cur] = index
  return pre
},{}))


// ** Question 3
const tree = {
  value:1,
  children:[
    {
      value:2,
      children:[
        {
          value:3,
          children:[]
        },
        {
          value:4,
          children:[
            {
              value:5,
              children:[]
            },
            {
              value:6,
              children:[]
            },
          ]
        }
      ]
    }
  ]
}


// solution
const totalUp = tree => tree.children ? tree.children.reduce((pre, cur) => pre + totalUp(cur), 0) + tree.value  : tree.value

// ** Question 4
// Given an array of words, pick out only those words that have two or
// more vowels in them. For the purposes of this question, a vowel is one
// of the letters a, e, i, o, u.
// For example, given
// ["dog", "cat", "mouse", "sky", "eleven"]
// return
// ["mouse", "eleven"]

// solution
console.log(["dog", "cat", "mouse", "sky", "eleven"].reduce((pre, cur) => (cur.match(/a|e|i|o|u/ig) || []).length >= 2 ? [...pre, cur] : pre, []))


// ** Question 5
// Given the same input as above, place parentheses around the vowels.
// For example:
// ["d(o)g", "c(a)t", "m(ou)s(e)", "sky", "(e)l(e)v(e)n"]
// Notice how consecutive vowels are grouped. That is, "m(ou)s(e)" is correct;
// "m(o)(u)s(e)" is incorrect.

// solution
console.log(["dog", "cat", "mouse", "sky", "eleven"].map(word => word.replace(/([aeiou]+)/ig, "($1)")))