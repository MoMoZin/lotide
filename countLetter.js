const assertEqual = function(actual, expected) {

  if (actual === expected)
    console.log(`👽 Assertion Passed: [${actual}] === [${expected}]`);
  else
    console.log(`😡 Assertion Failed: [${actual}] !== [${expected}]`);

};

// const countLetters = function (sentence) {
//   const result = {};
//   let modifiedS = sentence.toLowerCase().split(" ").join("");
//   for (let char of modifiedS) {
//     if (result[char]) {
//       result[char] += 1;
//     }
//     else {
//       result[char] = 1;
//     }
//   }
//   console.log(result);
//   return result;
// }

//code review
const countLetters = function(sentence) {
  const result = {};

  for (const char of sentence) {
    if (char === ' ') {
      continue;
    }
    if (!result[char]) {
      result[char] = 0;
    }
    result[char]++;
  }
  return result;
};

const result = countLetters("lighthouse in the house");

assertEqual(result['l'], 1);
assertEqual(result['i'], 2);
assertEqual(result['h'], 4);
assertEqual(result['e'], 3);