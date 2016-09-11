
function translatePigLatin(str) {
  
  // Reg Ex for consonant or consonant clusters
  // NOTE:  This pattern will match any consonant
  //        (1 or more ({1,0}) found at the 
  //        beginning of of the string. (^)
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