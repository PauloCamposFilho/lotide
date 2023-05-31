// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, value) {
  for (let key in obj) {
    if (obj[key] === value) return key;
  }  
  return;
};


// Tests
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

//findKeyByValue(bestTVShowsByGenre, "The Wire");

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // should PASS
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // should PASS
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy") // should pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "drama") // should fail