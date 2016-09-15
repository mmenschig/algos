/*  Flattens a nested array,
    regardless of levels of nesting.
*/

// We store the flattened array
// in here
var result = [];

function steamrollArray(arr) {
    
    for (var i = 0; i < arr.length; i++) {

        if (Array.isArray(arr[i])) {
            steamrollArray(arr[i]);
        } else {
            result.push(arr[i]);
        }
    }

    return result;
}

steamrollArray([[["a"]], [["b"]]]);
