/*  Flattens a nested array,
    regardless of levels of nesting.
*/

// We store the flattened array
// in here
var result = [];

function steamrollArray(arr) {
    var result = [];  

    var flatten = function(arg) {
        if (!Array.isArray(arg)) {
            result.push(arg);
        } else {
            for (var a in arg) {
                flatten(arg[a]);
            }
        }
    };

    // Call the flatten function for each
    // element in the array
    arr.forEach(flatten);
    return result;
}

steamrollArray([1, [2], [3, [[4]]]]);
