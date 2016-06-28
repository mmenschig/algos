
function fearNotLetter(str) {

    for (var i = 0; i < str.length -1; i++) {

        var lo = str[i].charCodeAt(0);
        var hi = str[i+1].charCodeAt(0);

        if (hi - lo !== 1) {
            return String.fromCharCode(lo + 1);
        }

    }

    return undefined;
}

fearNotLetter("wyz");
