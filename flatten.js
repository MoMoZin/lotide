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

module.exports = flatten;