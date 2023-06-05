const { assert } = require("chai");
const map = require("../map");

// test setup
const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["who", "let", "the", "dogs", "out"];
const results1 = map(words, word => word[0]);
const results2 = map(words2, (word2) => {
  return word2[0];
}); // playing around with different ways to write arrow functions

describe("#map", () => {
  it("should return ['g', 'c', 't', 'm', 't'] given [\"ground\", \"control\", \"to\", \"major\", \"tom\"]", () => {
    assert.deepEqual(results1, ['g', 'c', 't', 'm', 't']);
  });
  it("should return [\"w\", \"l\", \"t\", \"d\", \"o\"] given [\"who\", \"let\", \"the\", \"dogs\", \"out\"]", () => {
    assert.deepEqual(results2, ['w', 'l', 't', 'd', 'o']);
  });
});