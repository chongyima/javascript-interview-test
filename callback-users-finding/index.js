const api = require('./api')

// Look at api.js, use getUserCb
// Print user or error
const foo = () => {
  // ...
  api.getUserCb('Bruce', (err, user) => {
    if(!err) console.log(user);
    console.log(err);
  })
}

console.log(foo());