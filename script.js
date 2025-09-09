// promise
// const getData = new Promise((resolve, reject) => {
//   const num = Math.random() * 10;
//   console.log("generated num:", num);
//   if (num > 5) {
//     resolve({ num: num });
//   } else {
//     reject({ err: "DATA is not available" });
//   }
// });
// getData.then((data) => console.log(data)).catch((error) => console.log(error));

//promise All
// const getData1 = new Promise((resolve, reject) => {
//   const num = Math.random() * 10;
//   console.log("generated num1:", num);
//   if (num > 5) {
//     resolve({ num1: num });
//   } else {
//     reject({ err1: "DATA is not available" });
//   }
// });
// const getData2 = new Promise((resolve, reject) => {
//   const num = Math.random() * 10;
//   console.log("generated num2:", num);
//   if (num > 5) {
//     resolve({ num2: num });
//   } else {
//     reject({ err2: "DATA is not available" });
//   }
// });
// const getData3 = new Promise((resolve, reject) => {
//   const num = Math.random() * 10;
//   console.log("generated num3:", num);
//   if (num > 5) {
//     resolve({ num3: num });
//   } else {
//     reject({ err3: "DATA is not available" });
//   }
// });
// Promise.all([getData1, getData2, getData3])
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error));
