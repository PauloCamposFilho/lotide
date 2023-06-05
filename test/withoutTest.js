const { assert } = require("chai");
const without = require("../without");

// test setup

const someArray = [1,2,3,4];
const newArray = without(someArray, [1]);

describe("#without", () => {
  it("should return [2,3] given an original array of [1,2,3] and a without array of [1]", () => {
    assert.deepEqual(without([1,2,3], [1]), [2,3]);
  });
  it("should return ['hello', 'world'] given an original array of ['hello', 'world', 'lighthouse'] and a without array of ['lighthouse']", () => {
    assert.deepEqual(without(['hello', 'world', 'lighthouse'], ['lighthouse']), ['hello', 'world']);
  });
  it("should not change the original array", () => {
    assert.deepEqual(someArray, [1,2,3,4]);
  });
});

