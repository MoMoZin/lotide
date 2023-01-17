const map = require('../map');
const assert = require('chai').assert;

describe('#map', () => {
  it('should get ["g", "c", "t", "m", "t"] for index 0  of ["ground", "control", "to", "major", "tom"]', () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const actaul = map(words, word => word[0]);
    const expected = ['g', 'c', 't', 'm', 't'];
    assert.deepEqual(actaul, expected);
  });
  it('should get ["grounds", "controls", "tos", "majors", "toms"] for adding s to ["ground", "control", "to", "major", "tom"]', () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const actaul = map(words, word => word + 's');
    const expected = ["grounds", "controls", "tos", "majors", "toms"];
    assert.deepEqual(actaul, expected);
  });
  it('should return all uppercase of ["ground", "control", "to", "major", "tom"]', () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const actaul = map(words, word => word.toUpperCase());
    const expected = ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"];
    assert.deepEqual(actaul, expected);
  });
});