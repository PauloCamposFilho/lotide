// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);
  if (object1Keys.length !== object2Keys.length) return false; 
  for (let key of object1Keys) {
    //console.log("key:", key, "value:", object1[key]);
    if (Array.isArray(object1[key])) {
      //console.log("array detected");
      //console.log(object1[key]);
      //console.log(object2[key]);
      //console.log("check:", eqArrays(object1[key], object2[key]));
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
      continue; // array matched, go to next iteration of the loop.
    }
    if (object1[key] !== object2[key]) return false;
  }
  return true;
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false


//assertEqual(eqObjects(shirtObject , anotherShirtObject), true); // => true
//assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false); // => false