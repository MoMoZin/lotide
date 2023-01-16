const assertEqual = function(actual, expected) {

  if (actual === expected)
    console.log(`👽 Assertion Passed: [${actual}] === [${expected}]`);
  else
    console.log(`😡 Assertion Failed: [${actual}] !== [${expected}]`);

};

// const countOnly = function (allItems, itemsToCount) {
//   // const resultObj = {};

//   // for (let itemKey in itemsToCount) {
//   //   if (itemsToCount[itemKey] && allItems.includes(itemKey)) {
//   //     let count = 0;
//   //     for (let item of allItems) {
//   //       if (item === itemKey) {
//   //         count++;
//   //       }
//   //     }
//   //     resultObj[itemKey] = count;
//   //   }
//   // }
//   // return resultObj;

//   const results = {};
//   for (const item of allItems) {
//     if (itemsToCount[item]) {
//       if (results[item]) {
//         results[item] += 1;
//       }
//       else {
//         results[item] = 1;
//       }
//     }
//   }
//   return results;
// }

//code review
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

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
