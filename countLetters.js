// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  let result = {};
  let newStr = str.toLowerCase();
  for (let letter of newStr) {
    if (result[letter]) {
      result[letter] ++;
      continue;
    }
    result[letter] = 1;
  }
  return result;
};

assertEqual(countLetters("LHL")["l"], 2); // should PASS
assertEqual(countLetters("LHL")["l"], 1); // should FAIL
assertEqual(countLetters("LHL")["h"], 1); // should PASS
assertEqual(countLetters("LHL")["x"], 2); // should FAIL