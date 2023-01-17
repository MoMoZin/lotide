const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

const result = letterPositions("hello");

describe('#letterPositions', () => {
  it('should get [0] for ["Lighthouse", "Labs"] for result["h"]', () => {
    assert.deepEqual(result['h'], [0]);
  });
  it('should get [2,3] for ["Lighthouse", "Labs"] for result["l"]', () => {
    assert.deepEqual(result['l'], [2, 3]);
  });
});