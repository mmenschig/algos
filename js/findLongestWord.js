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
