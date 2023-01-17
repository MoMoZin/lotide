const assertObjectsEqual = require('../assertObjectsEqual');

assertObjectsEqual({ a: '1', b: 2 }, { b: 3, a: '1' }); //FAILED
assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' }); //PASS