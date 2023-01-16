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

// const without = function (source, removeList) {
//   let localSource = [...source];
//   for (let remove of removeList) {
//     const index = localSource.indexOf(remove);//only remving once
//     if (index > -1)
//       localSource.splice(index, 1);
//   }
//   return localSource;
// };


const without = function(source, removeList) {
  let newSource = [];
  for (let item of source) {
    if (!removeList.includes(item)) {
      newSource.push(item);
    }
  }
  return newSource;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without([1, 2, 3, 1], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(["1", "2", "3", false], [1, 2, "3", true]), ["1", "2", false]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;