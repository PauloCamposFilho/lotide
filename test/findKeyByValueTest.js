const { assert } = require("chai");
const findKeyByValue = require("../findKeyByValue");

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe("#findKeyByValue", () => {
  it("should return 'drama', when finding by value 'The Wire'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("should return undefined, when finding by value that isn't present", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "valueThatIsntPresent"), undefined);
  });
  it("should return 'comedy', when finding by value 'Brooklyn Nine-Nine'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
  });
});