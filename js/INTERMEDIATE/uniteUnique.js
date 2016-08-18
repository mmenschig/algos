
function uniteUnique(arr) {

	// storing the unique values in here	
    var combined = [];
    
    // iterating through the arguments (arrays)
    for (var i = 0; i < arguments.length; i++) {
        argArray = arguments[i];

        // iterating through the array items
        for (var j = 0; j < argArray.length; j++) {

        	// storing value if not in 'combined' yet
            if (combined.indexOf(argArray[j]) === -1) {
                combined.push(argArray[j]);
            }
        }
    }

    return combined;
}


uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
