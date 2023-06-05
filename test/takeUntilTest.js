const { assert } = require("chai");
const takeUntil = require("../takeUntil");

//test setup

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

describe("#takeUntil", () => {
  it("return [1, 2, 5, 7, 2] given an array [1, 2, 5, 7, 2, -1, 2, 4, 5] and a callback to return true on negative number", () => {
    assert.deepEqual(results1, [1, 2, 5, 7, 2]);
  });
  it("return ['I've', 'been', 'to', 'Hollywood'] given an array [\"I've\", \"been\", \"to\", \"Hollywood\", \",\", \"I've\", \"been\", \"to\", \"Redwood\"] and a callback to return true on a comma ','", () => {
    assert.deepEqual(results2, ["I've", "been", "to", "Hollywood"]);
  });
});