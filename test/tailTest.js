const { assert } = require("chai");
const tail = require("../tail");

describe("#tail", () => {
  it("given [\"Hello\", \"Lighthouse\", \"Labs\"] returns [ \"Lighthouse\", \"Labs\" ]", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("given only one item in array, returns empty array", () => {
    assert.deepEqual(tail(["Lighthouse"]), []);
  });
});