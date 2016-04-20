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


