function getPromise1() {
  return Promise.reject("error");
}

function getPromise2() {
  return getPromise1()
    .then((val) => console.log(val))
    .catch((err) => console.log(err));
  // 3
  // return getPromise1()
  //   .then((val) => console.log(val))
  //   .catch((err) => {
  //     console.log(err);
  //     return err;
  //   });
  // 1
  // return getPromise1()
  //   .then((val) => console.log(val))
  //   .catch((err) => {
  //     console.log(err);
  //     throw err;
  //   });
}

function getPromise3() {
  return getPromise2()
    .then((val) => console.log(`${val} accepted`))
    .catch((err) => console.log(`${err} rejected`));
}

getPromise3();
