/**
 * Checks if last n characters match last m characters
 * in input string (str). Returns true or false
 * @param  {string} str    	input string to be tested
 * @param  {string} target 	target string at end
 * @return {bool}        	returns true if match / false if no match
 * @author mmenschig
 * @version 1.0
 */
function confirmEnding(str, target) {

  var strSplit = str.split(" ");
  var lastWord = strSplit[strSplit.length -1];

  if (lastWord.substr(-target.length) === target) {
    return true;
  } else {
    return false;
  }

}

confirmEnding("He has to give me a new name", "me");


