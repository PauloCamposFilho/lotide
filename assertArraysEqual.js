const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray)) {
    console.log(`✅✅✅ Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${firstArray} !== ${secondArray}`);
  }
};

const eqArrays = function(arg1, arg2) {
  if (arg1.length !== arg2.length) return false;
  for (let i = 0; i < arg1.length; i++) {
    if (arg1[i] !== arg2[i]) return false;
  }
  return true;
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3, 4], [1, 2, 3]); // => should FAIL
assertArraysEqual([1, 2, 4], [1, 2, 3]); // => should FAIL
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); // => should FAIL
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); // => should FAIL
assertArraysEqual([1, 2, 3, 5], [1, 2, 3, 4]); // => should FAIL
assertArraysEqual([0, -2, 3], [0, -2, 3]); // should PASS