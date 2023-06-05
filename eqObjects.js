const eqArrays = require("./eqArrays");
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

module.exports = eqObjects;