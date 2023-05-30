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

const without = function(originalArray, expurgeArray) {
  let result = [];
  for (let original of originalArray) {
    let toAdd = true;
    for (let expurge of expurgeArray) {
      if (expurge === original) {
        toAdd = false;
        break;
      }
    }
    if (toAdd) result.push(original);
  }
  return result;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);