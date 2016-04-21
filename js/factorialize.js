/**
 * Creates the factorial of an integer
 * @param  {integer} num number to be factorialized
 * @return {integer}     returns factorial
 * @author mmenschig
 * @version 1.0
 */
function factorialize(num) {
  
  var array = [];
  var result = 1;

  // Checks if the integer is valid
  if (num < 0) {
    console.log("The integer must be greater or equal to 1");
    return false;
  }

  if (num === 0) {
    return 1;
  }

  // Create array from 1 to num
  for (var i = 1; i <= num; i++) {
    array.push(i);
  }

  for (var a = 0; a <= array.length - 1; a++) {
    result *= array[a]
  }

  return result;
}

console.log(factorialize(9));
