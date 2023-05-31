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