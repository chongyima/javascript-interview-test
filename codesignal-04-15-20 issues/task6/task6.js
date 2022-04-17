function getNormalizedUser(user) {
  // const user1 = JSON.parse(JSON.stringify(user));
  // user1.username = user1.username.toLowerCase();
  // user.username = user.username.toLowerCase();
  return { ...user, username: user.username.toLowerCase() };
}

let u = {
  id: 12,
  username: "SomeUser"
};
let u2 = getNormalizedUser(u);
console.log(u);
