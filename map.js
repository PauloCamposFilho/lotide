const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray)) {
    console.log(`✅✅✅ Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${firstArray} !== ${secondArray}`);
  }
};

const eqArrays = function(arg1, arg2) {
  if (arg1 === undefined && arg2 === undefined) return true;
  if (arg1 === undefined || arg2 === undefined) return false;
  if (arg1.length !== arg2.length) return false;
  for (let i = 0; i < arg1.length; i++) {
    if (arg1[i] !== arg2[i]) return false;
  }
  return true;
};

const map = function(array, callback) {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["who", "let", "the", "dogs", "out"];
const results1 = map(words, word => word[0]);
const results2 = map(words2, (word2) => { return word2[0]}); // playing around with different ways to write arrow functions
const results3 = map(words, (word) => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']); // should PASS
assertArraysEqual(results2, ['g', 'c', 't', 'm', 't']); // should FAIL
assertArraysEqual(results3, []); // should FAIL
assertArraysEqual(results2, ["w", "l", "t", "d", "o"]); // should PASS