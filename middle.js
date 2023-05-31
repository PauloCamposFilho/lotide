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

const middle = function(arr) {
  let result = [];
  if (arr === undefined || arr.length === 0) {
    return false;
  }
  let _isEvenLength = arr.length % 2 === 0;
  let _middleIndex = [];
  
  if (_isEvenLength) {
    _middleIndex.push((arr.length / 2) - 1);
    _middleIndex.push(arr.length / 2);
  } else {
    _middleIndex.push(Math.floor(arr.length / 2));
  }
  for (let index of _middleIndex) {
    result.push(arr[index]);
  }
  return result;
};

assertArraysEqual(middle([0, 1, 2]),[1]); // should PASS.
assertArraysEqual(middle([0, 1, 2]), [1, 2]); // should FAIL.
assertArraysEqual(middle([0, 1, 2, 3]), [1, 2]); // should PASS.
assertArraysEqual(middle([0, 1, 2, 3, 4, 5, 6, 7, 8]), [4]); // should PASS.