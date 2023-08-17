// function createCheckDigit(membershipId) {
//   // Write the code that goes here.
//   let current = membershipId,
//     sum = membershipId;
//   while (sum > 9) {
//     sum = 0;
//     while (current > 0) {
//       let fraction = current % 10;
//       sum = sum + fraction;
//       current = Math.floor(current / 10);
//       console.log(sum, current);
//     }
//     current = sum;
//   }
//   return sum;
// }

// Promise.allSettled()

// console.log(createCheckDigit("55"));

async function getInParallel(apiCalls) {
  // Write your code here
  const res = await Promise.allSettled(apiCalls);
  const newArr = res.map((item) => item.value().then((val) => val));
  const res2 = await Promise.allSettled(newArr);
  const newArr2 = res2.map((item) => item.value);
  console.log(newArr2);
  return newArr2;
}

let promise = getInParallel([
  () => Promise.resolve("First API call!"),
  () => Promise.resolve("Second API call!"),
]);
if (promise) {
  promise
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
}
module.exports.getInParallel = getInParallel;
