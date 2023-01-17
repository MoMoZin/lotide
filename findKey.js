const findKey = (obj, callback) => {
  for (const key of Object.keys(obj)) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

module.exports = findKey;