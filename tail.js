const assertEqual = function (actual, expected) {

  if (actual === expected)
    console.log(`👽 Assertion Passed: [${actual}] === [${expected}]`);
  else
    console.log(`😡 Assertion Failed: [${actual}] !== [${expected}]`);

};

const tail = function (array) {
  return array.slice(1);
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

assertEqual(tail([1]), 5);