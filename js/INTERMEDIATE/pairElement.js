// pair definition
var pairs = {
    'A': 'AT',
    'T': 'TA',
    'C': 'CG',
    'G': 'GC'
};


function pairElement(str) {

  var result = [];


  for (var i = 0; i < str.length; i++) {
    result.push(pairs[str[i]].split(''));
  }

  for (char in str) {
    result.push(pairs[str[char]].split(''))
    console.log(pairs[str[char]].split(''));
  }

  return result;




}


pairElement("GCG");
