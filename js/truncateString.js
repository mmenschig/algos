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

truncateString("Absolutely Longer", 2);
