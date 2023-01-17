const findKey = require("../findKey");
const assert = require('chai').assert;

describe('#findKey', () => {
  it('should get "noma" for trying to find stars = 2', () => {
    const actual = findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri": { stars: 3 },
      "noma": { stars: 2 },
      "elBulli": { stars: 3 },
      "Ora": { stars: 2 },
      "Akelarre": { stars: 3 }
    }, x => x.stars === 2);
    const expected = 'noma';
    assert.equal(actual, expected);
  });
  it('should get "Akaleri" for trying to find stars > 2', () => {
    const actual = findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri": { stars: 3 },
      "noma": { stars: 2 },
      "elBulli": { stars: 3 },
      "Ora": { stars: 2 },
      "Akelarre": { stars: 3 }
    }, x => x.stars > 2);
    const expected = 'Akaleri';
    assert.equal(actual, expected);
  });
});