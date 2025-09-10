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

// const getData = new Promise((resolve, reject) => {
//   const num = Math.random() * 10;
//   console.log(num);
//   //calling resolve and reject function send it as obj to get the value
//   if (num > 3) resolve({ status: "resolved", value: num });
//   else reject({ status: "rejected", value: num });
// });
// //consuming a promise with then catch and finally.
// getData
//   .then((data) => console.log("✅", data))
//   .catch((error) => console.log("❌", error))
//   .finally(() => console.log("Promise finished"));

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

// const getData = new Promise((resolve, reject) => {
//   const num = Math.random() * 10;
//   console.log(num);
//   //calling resolve and reject function send it as obj to get the value
//   if (num > 3) resolve({ status: "resolved", value: num });
//   else reject({ status: "rejected", value: num });
// });
// //consuming a promise with then catch and finally.
// getData
//   .then((data) => console.log("✅", data))
//   .catch((error) => console.log("❌", error))
//   .finally(() => console.log("Promise finished"));

// const getData2 = new Promise((resolve, reject) => {
//   const num = Math.random() * 10;
//   console.log(num);
//   //calling resolve and reject function send it as obj to get the value
//   if (num > 3) resolve({ status: "resolved2", value: num });
//   else reject({ status: "rejected2", value: num });
// });
// //consuming a promise with then catch and finally.
// getData
//   .then((data) => console.log("✅", data))
//   .catch((error) => console.log("❌", error))
//   .finally(() => console.log("Promise2 finished"));

// Promise.all([getData, getData2])
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Promise done"));

//async await in details wrapping up set time out
// const delay = (ms) =>
//   new Promise((resolve, reject) => {
//     if (ms < 0) {
//       reject("❌❌");
//     } else {
//       setTimeout(resolve, ms); //set time out e resolve function call kortesi resolve()
//     }
//   });
// const loadData = async () => {
//   console.log(1);
//   console.log(2);
//   await delay(1000);
//   console.log(3);
//   console.log(4);
//   console.log(5);
// };
// loadData();

/*
delay(1000) কল করলে নতুন promise তৈরি হয়।
promise-এর ভেতরে setTimeout চালু হয়।
১ সেকেন্ড পরে setTimeout তার callback চালাবে, আর callback এ গিয়ে resolve() ট্রিগার করবে।
resolve হওয়ার পর await delay(1000) unblock হয়ে যায়, মানে async ফাংশন আবার চালু হয়।
*/

// function getApple() {
//   setTimeout(() => {
//     console.log("🍎");
//   }, 3000);
// }
function getBanana() {
  setTimeout(() => {
    console.log("🍌");
  }, 1000);
}
//banana comes first
getApple();
getBanana();
//but if we want apple to come first make a promise
function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🍎");
    }, 3000);
  });
}
function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🍌");
    }, 1000);
  });
}
async function fetchFruits() {
  const apple = await getApple();
  console.log(apple);
  const banana = await getBanana(); //await ekhane na dileo hbe
  console.log(banana);
}
fetchFruits();
