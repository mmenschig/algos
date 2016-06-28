
function fearNotLetter(str) {
  
  // NOTE:  The character 'a' equals
  //        the charcode 97, 'z' is
  //        equal to charcode 122

    for (var i = 0; i < str.length -1; i++) {


        // console.log("i is: ", i);
        var lo = str[i].charCodeAt(0);
        var hi = str[i+1].charCodeAt(0);

        if (hi - lo !== 1) {
            console.log("We're missing something", hi - lo);

            console.log(str[i].charCodeAt(0) + 1);
            console.log(String.fromCharCode(lo + 1))

            return String.fromCharCode(lo + 1);
        }

    }

    return undefined
}

fearNotLetter("wyz");
