const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (!itemsToCount[item]) {
      continue;
    }
    if (results[item] === undefined) {
      results[item] = 0;
    }
    results[item] += 1;
  }
  return results;
};

module.exports = countOnly;