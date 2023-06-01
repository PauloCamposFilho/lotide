// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (object, callback) => {
  for (const item in object) {
    if (callback(object[item])) return item;
  }
};

const objectTest = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 },
  "someName": { stars: 0 }
};

assertEqual(findKey(objectTest, x => x.stars === 2), "noma"); // PASS
assertEqual(findKey(objectTest, x => x.stars === 1), "noma"); // FAIL
assertEqual(findKey(objectTest, x => x.stars === 3), "noma"); // FAIL
assertEqual(findKey(objectTest, x => x.stars === 0), "someName"); // PASS