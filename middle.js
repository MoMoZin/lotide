const middle = (source) => {
  const length = source.length;
  let result = [];
  if (length < 3) {
    return result;
  }
  const middleIndex = Math.floor(length / 2);
  if (length % 2 === 0) {
    result.push(source[middleIndex - 1]);
    result.push(source[middleIndex]);
  } else {
    result.push(source[middleIndex]);
  }
  return result;
};

module.exports = middle;