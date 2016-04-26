function rot13(str) {

    var strList = [];
    var strResult = "";
    var i = 0;
    var tempCharCode = 0;
  
    for (i; i < str.length; i++) {
        // console.log(str[i], str.charCodeAt(i));

        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
            // console.log(str.charCodeAt(i));

            // For dealing with letters with 
            // characterCodes of 78 and higher
            if ((str.charCodeAt(i) + 13) > 90) {
                tempCharCode = 13 - (90 - str.charCodeAt(i));
                strResult += String.fromCharCode(64 + tempCharCode);
            } 
            else {
                strResult += String.fromCharCode(str.charCodeAt(i) + 13);
            }
        } 
        else {
            strResult += str[i];
        }
    }
    
    return strResult;

}

// Change the inputs below to test
rot13("SERR PBQR PNZC");