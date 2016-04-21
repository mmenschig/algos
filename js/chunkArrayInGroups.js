/**
 * Splits an array into chunks of equal size
 * @param  {array} arr  	input array to be split
 * @param  {integer} size 	size of each sub array
 * @return {array}      	returns nested array
 * @author mmenschig
 * @version 1.0
 */
function chunkArrayInGroups(arr, size) {


  var chunks = [];
  var i = 0;
  var n = arr.length;

  while (i < n) {
    chunks.push(arr.slice(i, i+= size));
  }

  return chunks;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);