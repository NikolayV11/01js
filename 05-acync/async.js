// Event Loop

// function delay(callback, time = 1000) {
//   setTimeout(callback, time);
// }

// delay(() => {
//   console.log("ky");
// });

const delay = (time = 1000) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve([1, 2, 3]);
      reject("Error in delay");
    }, time);
  });
  return promise;
};

// delay(500)
//   .then((data) => {
//     console.log("Times", data);
//     return data.map((x) => {
//       return x ** 2;
//     });
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("false");
//   });

const getData = () =>
  new Promise((resolve) => {
    resolve([1, 2, 3]);
  });

// getData().then((data) => {
//   console.log(data);
// });

async function asyncExample() {
  try {
    const data = await getData();
    console.log(data);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("finally");
  }
}

asyncExample();
