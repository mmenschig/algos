
function translatePigLatin(str) {
  
  // Reg Ex for consonant or consonant clusters
  var re = /^([bcdfghjklmnpqrstvwxyz]{1,})/;

  // executing regular expression,
  // returns true if object is created
  if (re.exec(str) !== null) {
    
    // number of consonants at beginning
    // of string
    var len = re.exec(str)[0].length;

    // We move the found consonsants to the 
    // end of the original string and add 
    // "ay" behind the result
    return (str.substr(len) + str.substr(0, len) + "ay");

  } 
    
  // If the string begins with a vowel
  return (str + "way");
}

translatePigLatin("glove");