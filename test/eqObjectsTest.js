const eqObjects = require("../eqObjects.js");
const assert = require('chai').assert;

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

describe('#eqObjects', () => {
  it('should be true that multiColorShirtObject & anotherMultiColorShirtObject are same ]', () => {
    const actual = eqObjects(multiColorShirtObject, anotherMultiColorShirtObject);
    assert.isTrue(actual);
  });
  it('should be false that multiColorShirtObject & longSleeveMultiColorShirtObject are same ]', () => {
    const actual = eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject);
    assert.isFalse(actual);
  });
  it('should be true that shirtObject & anotherShirtObject are same ]', () => {
    const actual = eqObjects(shirtObject, anotherShirtObject);
    assert.isTrue(actual);
  });
  it('should be true that shirtObject & anotherShirtObject are same ]', () => {
    const actual = eqObjects(shirtObject, anotherShirtObject);
    assert.isTrue(actual);
  });
  it('should be false that shirtObject & longSleeveShirtObject are same ]', () => {
    const actual = eqObjects(shirtObject, longSleeveShirtObject);
    assert.isFalse(actual);
  });
  it('should be false that multiColorShirtObject & shirtObject are same ]', () => {
    const actual = eqObjects(multiColorShirtObject, shirtObject);
    assert.isFalse(actual);
  });
});