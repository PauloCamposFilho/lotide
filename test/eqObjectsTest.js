const { assert } = require("chai");
const eqObjects = require("../eqObjects");

//test setup

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

describe("#eqObjects", () => {
  it("should return true when comparing shirtObject and anotherShirtObject", () => {
    assert.isTrue(eqObjects(shirtObject, anotherShirtObject));
  });
  it("should return false when comparing shirtObject and longSleeveShirtObject", () => {
    assert.isFalse(eqObjects(shirtObject, longSleeveShirtObject));
  });
  it("should return true when comparing multiColorShirtObject and anotherMultiColorshirtObject", () => {
    assert.isTrue(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject));
  });
  it("should return false when comparing multiColorShirtObject and longSleeveMultiColorShirtObject", () => {
    assert.isFalse(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject));
  });
});

// assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true
// assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false


// assertEqual(eqObjects(shirtObject , anotherShirtObject), true); // => true
// assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false); // => false