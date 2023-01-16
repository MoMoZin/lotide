const assert = require('chai').assert;
const tail = require('../tail.js');


describe('#tail', () => {
  it('should get ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it('should get length of 3 to verify that tail did not change the actual array', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words); // no need to capture the return value since we are not checking it
    assert.deepEqual(words.length, 3);
  });
});