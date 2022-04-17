const basePromise = new Promise(function (resolve, reject) {
  const subPromise1 = new Promise(function (resolve) {
    setTimeout(() => resolve("1 resolved"), 100);
  });
  const subPromise2 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("2 resolved"), 80);
    setTimeout(() => reject("2 rejected"), 50);
  });
  resolve(Promise.race([subPromise1, subPromise2]));
  setTimeout(() => reject("base rejected"), 10);
});
basePromise.then((x) => console.log(x)).catch((x) => console.log(x));
