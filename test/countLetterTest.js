const countLetter = require('../countLetter');
const assert = require('chai').assert;

const result = countLetter("lighthouse in the house");

describe('#countLetter', () => {
  it('should get true for result["l"] equals 1', () => {
    assert.strictEqual(result['l'], 1);
  });
  it('should get true for result["h"] equals 4', () => {
    assert.strictEqual(result['h'], 4);
  });
});