const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

assertArraysEqual(middle([0, 1, 2]),[1]); // should PASS.
assertArraysEqual(middle([0, 1, 2]), [1, 2]); // should FAIL.
assertArraysEqual(middle([0, 1, 2, 3]), [1, 2]); // should PASS.
assertArraysEqual(middle([0, 1, 2, 3, 4, 5, 6, 7, 8]), [4]); // should PASS.