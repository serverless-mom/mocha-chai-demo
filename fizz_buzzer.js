module.exports = function(topValue) {
  if (isNaN(topValue) || topValue % 1 != 0) {
    return 'invalid input'
  }
  let returnArray = [];
  for (i = 1; i <= topValue; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      returnArray.push('fizzbuzz');
    } else if (i % 3 == 0) {
      returnArray.push('fizz')
    } else if (i % 5 == 0) {
      returnArray.push('buzz')
    } else {
      returnArray.push(i)
    }
  }
  return returnArray;
}
