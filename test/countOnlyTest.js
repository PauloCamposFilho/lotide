const { assert } = require("chai");
const countOnly = require("../countOnly");

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe("#countOnly", () => {
  it("should return 1 given the test object and passing 'Jason' into the function", () => {
    assert.strictEqual(result1["Jason"], 1);
  });
  it("should return undefined given the test object and passing 'Karima' into the function", () => {
    assert.strictEqual(result1["Karima"], undefined);
  });
  it("should return 2 given the test object and passing 'Fang' into the function", () => {
    assert.strictEqual(result1["Fang"], 2);
  });
});