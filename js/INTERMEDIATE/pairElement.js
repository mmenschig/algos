// pair definition
var pairs = {
    'A': 'AT',
    'T': 'TA',
    'C': 'CG',
    'G': 'GC'
};


function pairElement(str) {

  var result = [];

  for (var char in str) {
    // We split the matching pair and
    // add the returned array into result
    result.push(pairs[str[char]].split(''));
  }

  return result;
}


pairElement("GCG");
