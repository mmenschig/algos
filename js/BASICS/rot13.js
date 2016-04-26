function rot13(str) {

    var strList = [];
    var strResult = "";
    var i = 0;
    var tempCharCode = 0;
  
    for (i; i < str.length; i++) {

        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {

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

rot13("SERR PBQR PNZC");

// Much more efficient version using only the
// modulo operator
function moduloRot13(str) {

    var strList = [];
    var strResult = "";
    var i = 0;

    for (i; i < str.length; i++) {
        
        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
            strResult += String.fromCharCode((str.charCodeAt(i) % 26) + 65);
        } 
        else {
            strResult += str[i];
        }
    }

    return strResult;
}

moduloRot13("SERR PBQR PNZC")