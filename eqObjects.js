const eqArrays = require("./eqArrays");

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

module.exports = eqObjects;