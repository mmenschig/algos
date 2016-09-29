
function addTogether() {

  // Check if either argument is not a valid number:
  for (var arg = 0; arg < arguments.length; arg++) {
    if (typeof arguments[arg] !== 'number') {
      return undefined
    }
  }

  // Using closures
  if (arguments.length === 2) {
    return arguments[0] + arguments[1];
  } else {

    var x = arguments[0];
    return function(y) {

      if (typeof arguments[0] !== 'number') {
        return undefined;
      }

      return x + y;
    };
  }

}

console.log(addTogether(2,3));
console.log(addTogether(2)(11));