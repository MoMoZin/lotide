const assertEqual = function (actual, expected) {

  if (actual === expected)
    console.log(`👽 Assertion Passed: [${actual}] === [${expected}]`);
  else
    console.log(`😡 Assertion Failed: [${actual}] !== [${expected}]`);

};

const countLetters = function (sentence) {
  const result = {};
  let modifiedS = sentence.toLowerCase().split(" ").join("");
  for (let char of modifiedS) {
    if (result[char]) {
      result[char] += 1;
    }
    else {
      result[char] = 1;
    }
  }
  console.log(result);
}

countLetters("lighthouse in the house");