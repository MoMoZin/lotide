const countLetter = function(sentence) {
  const result = {};

  for (const char of sentence) {
    if (char === ' ') {
      continue;
    }
    if (!result[char]) {
      result[char] = 0;
    }
    result[char]++;
  }
  return result;
};

module.exports = countLetter;