const eqArrays = require('./eqArrays.js');
const assertArraysEqual = require('./assertArraysEqual.js');

// const eqArrays = function (array1, array2) {
//   let result = true;
//   if (array1.length !== array2.length) {
//     result = false;
//   }

//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       result = false;
//     }
//   }

//   return result;
// };

// const assertArraysEqual = function (array1, array2) {

//   if (eqArrays(array1, array2)) {
//     console.log(`👽 Assertion Passed: [${array1}] === [${array2}]`);
//   }
//   else {
//     console.log(`😡 Assertion Failed: [${array1}] !== [${array2}]`);
//   }
// };

const middle = (source) => {
  const length = source.length;
  let result = [];
  if (length < 3) {
    return result;
  }
  const middleIndex = Math.floor(length / 2);
  if (length % 2 === 0) {
    result.push(source[middleIndex - 1]);
    result.push(source[middleIndex]);
  } else {
    result.push(source[middleIndex]);
  }
  return result;
};

module.exports = middle;