// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  //console.log(allItems);
  //console.log(itemsToCount);
  let result = {};
  for (let item of allItems) {
    //console.log(item, "exists?", itemsToCount[item] == true);
    if (itemsToCount[item]) {
      if (result[item]) {
        result[item] ++;
        continue;
      }
      result[item] = 1;
    }
  }
  console.log(result);
  return result;
};

// tests

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

assertEqual(result1["Jason"], 1); // should PASS
assertEqual(result1["Karima"], undefined); // should PASS
assertEqual(result1["Fang"], 2); // should PASS
assertEqual(result1["Agouhanna"], undefined); // should PASS
assertEqual(result1["Jason"], 2); // should FAIL