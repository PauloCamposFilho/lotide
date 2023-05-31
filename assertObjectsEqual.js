const eqArrays = function(arg1, arg2) {
  if (arg1 === undefined && arg2 === undefined) return true;
  if (arg1 === undefined || arg2 === undefined) return false;
  if (arg1.length !== arg2.length) return false;
  for (let i = 0; i < arg1.length; i++) {
    if (arg1[i] !== arg2[i]) return false;
  }
  return true;
};
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);
  if (object1Keys.length !== object2Keys.length) return false; 
  for (let key of object1Keys) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
      continue; // array matched, go to next iteration of the loop.
    }
    if (object1[key].constructor === Object) {
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
      continue;
    }
    if (object1[key] !== object2[key]) return false;
  }
  return true;
};

const assertObjectsEqual = function(firstObject, secondObject) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(firstObject, secondObject)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(firstObject)} === ${inspect(secondObject)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(firstObject)} !== ${inspect(secondObject)}`);
  }
};

assertObjectsEqual({ name: "Paulo" }, { name: "Paulo" }); // PASS
assertObjectsEqual({ name: "Paulo", lastName: "Filho" }, { name: "Paulo" }); // FAIL
assertObjectsEqual({ name: "Paulo", lastName: "Filho" }, { lastName: "Filho", name: "Paulo" }); // PASS
assertObjectsEqual({ name: { first: "Paulo", last: "Filho" }}, {name: { first: "Paulo", last: "Filho" }}); // PASS