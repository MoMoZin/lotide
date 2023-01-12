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

const eqObjects = function(obj1, obj2) {

  if (Object.keys(obj1).length !== Object.keys(obj2).length)
    return false;

  for (let key of Object.keys(obj1)) {
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      return eqArrays(obj1[key], obj2[key]);
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;

};

const assertObjectsEqual = function(obj1, obj2) {

  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(obj1, obj2))
    console.log(`👽 Assertion Passed: [ ${inspect(obj1)}] === [${inspect(obj2)}]`);
  else
    console.log(`😡 Assertion Failed: [${inspect(obj1)}] !== [${inspect(obj2)}`);
};

assertObjectsEqual({ a: '1', b: 2 }, { b: 3, a: '1' }); //FAILED
assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' }); //PASS