/**
 * [truncateString description]
 * @param  {[type]} str [description]
 * @param  {[type]} num [description]
 * @return {[type]}     [description]
 * @author mmenschig
 * @version 1.0
 */
function truncateString(str, num) {


  if (num <= 3) {
     result = str.slice(0, num);
     result += "...";
  } else {
    if (num >= str.length) {
      result = str
    } else {
     result = str.slice(0, num - 3);
     result += "...";
  }
  }

  return result;

}

console.log(truncateString("Absolutely Longer", 3));
