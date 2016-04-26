/**
 * Returns length of longest word in string
 * @param  {string} str 	input string
 * @return {integer}    	length of longest word
 * @author mmenschig
 * @version 1.0
 */
function findLongestWord(str) {

  var str_array = str.split(" ");
  var length = 0;
  
  for (var i = 0; i < str_array.length; i++) {
    if (str_array[i].length > length) {
      length = str_array[i].length;
    }
  }

  return length;
  
}

findLongestWord("What if we try a super-long word such as otorhinolaryngology");
