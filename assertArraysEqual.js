const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arg1, arg2) {
  if (arg1.length !== arg2.length) return false;
  for (let i = 0; i < arg1.length; i++) {
    if (arg1[i] !== arg2[i]) return false;
  }
  return true;
};

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertArraysEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), true); // => should FAIL
assertArraysEqual(eqArrays([1, 2, 4], [1, 2, 3]), true); // => should FAIL
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), true); // => should FAIL
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false); // => should PASS
assertArraysEqual(eqArrays([1, 2, 3, 5], [1, 2, 3, 4]), true); // => should FAIL