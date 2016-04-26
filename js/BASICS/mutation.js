function mutation(arr) {

    var arrLower = [];
    for (var a = 0; a < arr.length; a++) {
        arrLower.push(arr[a].toLowerCase());
    }

    // Checking if all characters exists
    var i = 0;
    var checkSum = 0;
    while (arrLower[0].indexOf(arrLower[1][i]) !== -1 ) {
        checkSum += 1;
        i++;
        } 

    // Comparing checkSum with second array string
    if (checkSum === arrLower[1].length) {
        return true;
    } 

    return false;

}

console.log(mutation(["Hello", "hello"]));
