const assertEqual = require('./assertEqual.js');

// const assertEqual = function(actual, expected) {

//   if (actual === expected)
//     console.log(`👽 Assertion Passed: [${actual}] === [${expected}]`);
//   else
//     console.log(`😡 Assertion Failed: [${actual}] !== [${expected}]`);

// };

// const eqArrays = function(array1, array2) {
//   let result = true;
//   if (array1.length !== array2.length)
//     result = false;

//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       result = false;
//     }
//   }

//   // console.log(result);
//   return result;
// };

//refactored after code review
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length)
    return false;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};



module.exports = eqArrays;