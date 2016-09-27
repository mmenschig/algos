
function dropElements(arr, func) {

    /* 
    While array is longer than 0 and
    and func() returns false we keep removing
    the first item of the array.
    */
    while (arr.length > 0 && !func(arr[0])) {
        arr.shift();
    }
    // Return arr when func() returns true the first time
    return arr;
}

dropElements([1, 2, 3], function(n) {return n > 2; });
