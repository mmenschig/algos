function destroyer(arr, arr2, arr3, arr4) {

    var passedFilter = Array.prototype.slice.call(arguments, 1);

    var newArray = arr.filter(function (x) {
    if (passedFilter.indexOf(x) !== -1){
        return false;
    }
        return true;
    });
    
    return newArray;
}

destroyer([1, 2, 5, 3, 2, 1], 1, 2, 5);