/** 
 * [destroyer description]
 * @param  {array} arr input array to filter
 * @return {array}     array excluding filter values
 * @author  mmenschig
 * @version  1.0
 */
function destroyer(arr) {

    var passedFilter = Array.prototype.slice.call(arguments, 1);

    // x is the current element that
    // Array.filter() is iterating over
    var newArray = arr.filter(function (x) {
    if (passedFilter.indexOf(x) !== -1) {
        return false;
    }
        return true;
    });
    
    return newArray;
}

console.log(destroyer([1, 2, 5, 3, 2, 1], 1, 2));