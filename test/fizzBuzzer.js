const fizzBuzzer = require('../fizz_buzzer');
require('chai').should();


describe('fizz buzzer', function() {
  it('returns an array of the expected values', function() {
    let testArray = fizzBuzzer(5);
    testArray.length.should.equal(5)
    testArray[2].should.equal('fizz');
  })
  it('does not accept strings', function() {
    fizzBuzzer('steve').should.equal('invalid input');
  })
})
