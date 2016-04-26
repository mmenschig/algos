/**
 * returns index at which an integer
 * should be inserted to keep the array
 * in sorted order
 * @param  {array} arr 
 * @param  {integer} num 
 * @return {integer}
 * @author mmenschig
 * @version 1.0 
 */
function getIndexToIns(arr, num) {
 
    // Sorts array from smallest to largest values
    arr = arr.sort(function (a, b) {
        return a - b;
    });

    // Returns last index value if
    // num is greater than last array item
    if (num > arr[arr.length - 1]) {
        return arr.length;
    }

    // Iterates through array and checks
    // if num is greater than current item, 
    // skips if yes. If smaller or equal,
    // returns that index value
    for (var i = 0; i < arr.length; i++) {
        if (num > arr[i]) {
            continue;
        } else if (num <= arr[i]) {
            return arr.indexOf(arr[i]);
        }
    }

}
 
getIndexToIns([2, 5, 10], 15);