const eqArrays = function(array1, array2) {
  let result = true;
  if (array1.length !== array2.length)
    result = false;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      result = false;
    }
  }

  return result;
};

const assertArraysEqual = function(array1, array2) {

  if (eqArrays(array1, array2))
    console.log(`👽 Assertion Passed: [${array1}] === [${array2}]`);
  else
    console.log(`😡 Assertion Failed: [${array1}] !== [${array2}]`);
};

const flatten = function(arrays) {
  let result = [];
  for (let array of arrays) {
    if (Array.isArray(array))
      result = result.concat(array);
    else
      result.push(array);
  }
  return result;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => [1, 2, 3, 4, 5, 6]
