// function declarations
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

const letterPositions = function(sentence) {
  const results = {};
  const newStr = sentence.toLowerCase();
  // logic to update results here
  for(let i in sentence) {
    let _letter = sentence[i];
    if (results[_letter]) {
      results[_letter].push(i);
      continue;
    }
    results[_letter] = [i];
  }
  return results;
};


const result1 = letterPositions("hello");
//console.log(result1);
//console.log(result1["h"]);

assertArraysEqual(result1["h"], ['0']); // pass
assertArraysEqual(result1["e"], ['1']); // pass
assertArraysEqual(result1["l"], ['2', '3']); // pass
assertArraysEqual(result1["o"], ['4']); // pass
assertArraysEqual(result1["x"], ['0']) // should fail
assertArraysEqual(result1["x"], undefined) // should pass