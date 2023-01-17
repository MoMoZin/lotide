const without = require('../without.js');
const assert = require('chai').assert;

describe('#Without', () => {
  it('should be [2, 3] after removing [1] from [1, 2, 3]', () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it('should be [2, 3] after removing [1] from [1, 2, 3, 1]', () => {
    assert.deepEqual(without([1, 2, 3, 1], [1]), [2, 3]);
  });
  it('should be ["1", "2"] after removing [1, 2, "3"] from ["1", "2", "3"]', () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
  it('should be ["1", "2", false] after removing [1, 2, "3", true] from ["1", "2", "3", false]', () => {
    assert.deepEqual(without(["1", "2", "3", false], [1, 2, "3", true]), ["1", "2", false]);
  });
  it('should not alter the original array after calling without function', () => {
    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"]); // no need to capture return value for this test case
    // Make sure the original array was not altered by the without function
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });
});