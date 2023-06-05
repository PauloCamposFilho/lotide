const { assert } = require("chai");
const countLetters = require("../countLetters");

describe("#countLetters", () => {
  it("should return two when counting the letter 'L' in 'LHL'", () => {
    assert.strictEqual(countLetters("LHL")["l"], 2);
  });
  it("should return one when counting the letter 'h' in 'LHL'", () => {
    assert.strictEqual(countLetters("LHL")["h"], 1);
  });
});