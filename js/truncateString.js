function truncateString(str, num) {

  // insert if clause

  if (num <= 3) {
     result = str.slice(0, num );
     result += "...";
  } else {
     result = str.slice(0, num - 3);
  }


  console.log(result);
  return result;

}

truncateString("A-", 1);
