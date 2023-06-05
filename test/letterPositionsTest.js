const { assert } = require("chai");
const letterPositions = require("../letterPositions");

const result1 = letterPositions("hello");

describe("#letterPositions", () => {
  it("should return ['0'] when checking for ['h'] in the string 'hello'", () => {
    assert.deepEqual(result1["h"], ['0']);
  });
  it("should return ['1'] when checking for ['e'] in the string 'hello'", () => {
    assert.deepEqual(result1["e"], ['1']);
  });
  it("should return ['2', '3'] when checking for ['l'] in the string 'hello'", () => {
    assert.deepEqual(result1["l"], ['2', '3']);
  });
  it("should return undefined when checking for ['x'] in the string 'hello'", () => {
    assert.isUndefined(result1["x"]);
  });
});