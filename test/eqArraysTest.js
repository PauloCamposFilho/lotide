const { assert } = require("chai");
const eqArrays = require("../eqArrays");

describe("#eqArrays", () => {
  it("should return true when comparing [1,2,3] with [1,2,3]", () => {
    assert.isTrue(eqArrays([1,2,3], [1,2,3]));
  });
  it("should return false when comparing [1,2,3] with [1,2,3,4]", () => {
    assert.isFalse(eqArrays([1,2,3], [1,2,3,4]));
  });
  it("should return true when comparing [1] with [1]", () => {
    assert.isTrue(eqArrays([1], [1]));
  });
});