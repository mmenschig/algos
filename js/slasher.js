/**
 * [slasher description]
 * @param  {[type]} arr     [description]
 * @param  {[type]} howMany [description]
 * @return {[type]}         [description]
 */
function slasher(arr, howMany) {

  var result = arr.slice(howMany, arr.length);
  return result;
}

console.log(slasher([1, 2, 3], 0));