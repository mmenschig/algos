
function uniteUnique(arr) {

    var combined = [];
    
    for (var i = 0; i < arguments.length; i++) {
        argArray = arguments[i];

        for (var j = 0; j < argArray.length; j++) {

            if (combined.indexOf(argArray[j]) === -1) {
                combined.push(argArray[j]);
            }
        }
    }


    return combined;
}


uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
