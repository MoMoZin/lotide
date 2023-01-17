const takeUntil = require('../takeUntil.js');
const assert = require('chai').assert;

describe('#takeUntil', () => {
  it('should return the array element until the call back return true', () => {
    const data = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const actual = takeUntil(data, x => x === ',');
    const expected = ['I\'ve', 'been', 'to', 'Hollywood'];
    assert.deepEqual(actual, expected);
  });
  it('should return the array element until the call back return true', () => {
    const data = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const actual = takeUntil(data, x => x < 0);
    const expected = [1, 2, 5, 7, 2];
    assert.deepEqual(actual, expected);
  });
});