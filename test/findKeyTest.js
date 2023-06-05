const { assert } = require("chai");
const findKey = require("../findKey");

const objectTest = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 },
  "someName": { stars: 0 }
};

describe("#findKey", () => {
  it("should find 'noma' if the callback checks for property stars with a value of 2", () => {
    assert.strictEqual(findKey(objectTest, x => x.stars === 2), "noma");
  });
  it("should find 'someName' if the callback checks for a property stars with a value of 0", () => {
    assert.strictEqual(findKey(objectTest, x => x.stars === 0), "someName");
  });
});