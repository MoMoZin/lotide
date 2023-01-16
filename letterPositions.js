const eqArrays = function(array1, array2) {
  let result = true;
  if (array1.length !== array2.length) {
    result = false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      result = false;
    }
  }

  return result;
};

const assertArraysEqual = function(array1, array2) {

  if (eqArrays(array1, array2)) {
    console.log(`👽 Assertion Passed: [${array1}] === [${array2}]`);
  }
  else {
    console.log(`😡 Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence.charAt(i);
    if (char !== " ") {
      if (results[char]) {
        results[char].push(i);
      }
      else {
        results[char] = [i];
      }
    }
  }
  return results;
};

const result = letterPositions("hello");
console.log('result', result);
assertArraysEqual(result['h'], [0]);
assertArraysEqual(result['e'], [1]);
assertArraysEqual(result['l'], [2, 3]);
assertArraysEqual(result['o'], [4]);


const result2 = letterPositions("lighthouse in the house");
console.log('result2', result2);

module.exports = letterPositions;