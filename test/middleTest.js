const middle = require('../middle.js');
const assert = require('chai').assert;

describe('#middle', () => {
  it('should return the middle of the array [1] => []"]', () => {
    assert.deepEqual(middle([1]), []);
  });
  it('should return the middle of the array [1, 2] => []"]', () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it('should return the middle of the array [1,2,3] => [2]"]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it('should return the middle of the array [1,2,3,4,5] => [3]"]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it('should return the middle of the array [1,2,3,4] => [2,3]"]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it('should return the middle of the array [1,2,3,4,5,6] => [3,4]"]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});