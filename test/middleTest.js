const { assert } = require("chai");
const middle = require("../middle");

// assertArraysEqual(middle([0, 1, 2]),[1]); // should PASS.
// assertArraysEqual(middle([0, 1, 2]), [1, 2]); // should FAIL.
// assertArraysEqual(middle([0, 1, 2, 3]), [1, 2]); // should PASS.
// assertArraysEqual(middle([0, 1, 2, 3, 4, 5, 6, 7, 8]), [4]); // should PASS.

describe("#middle", () => {
  it("should return [1] given [0, 1, 2]", () => {
    assert.deepEqual(middle([0,1,2]), [1]);
  });
  it("should return [2,3] given [1,2,3,4]", () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]);
  });
  it("should return [3] given [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1,2,3,4,5]), [3]);
  });
  it("should return false if the array is empty", () => {
    assert.isFalse(middle([]));
  });
  it("should return false if the array is undefined", () => {
    assert.isFalse(middle());
  });
});

