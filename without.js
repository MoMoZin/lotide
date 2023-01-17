const without = function(source, removeList) {
  let newSource = [];
  for (let item of source) {
    if (!removeList.includes(item)) {
      newSource.push(item);
    }
  }
  return newSource;
};

module.exports = without;