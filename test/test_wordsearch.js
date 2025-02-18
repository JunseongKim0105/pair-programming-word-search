const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')
    assert.isTrue(result);
  });
  it("vertical test", function() { 
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['B', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['I', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['L', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['I', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['T', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['I', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['E', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['S', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'ABILITIES')
    assert.isTrue(result);
  });
  it("should return false for empty array", function() {
    const result = wordSearch([], 'SEINFELD')
    assert.isFalse(result);
  });
});
