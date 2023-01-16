// const assertEqual = function (actual, expected) {

//   if (actual === expected)
//     console.log(`👽 Assertion Passed: [${actual}] === [${expected}]`);
//   else
//     console.log(`😡 Assertion Failed: [${actual}] !== [${expected}]`);

// };

//code review
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`👽 Assertion Passed: [${actual}] === [${expected}]`);
    return;
  }
  console.log(`😡 Assertion Failed: [${actual}] !== [${expected}]`);

};



module.exports = assertEqual;