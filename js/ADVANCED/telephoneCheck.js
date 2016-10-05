
function telephoneCheck(str) {

  // Check out https://regex101.com/
  //^(1|1\s|\()?([0-9]{3})?(-|\s|\))?([0-9]{3})?(-|\s|\))?([0-9]{4})?
  
  // The following should return true
  // 555-555-5555
  // (555)555-5555
  // (555) 555-5555
  // 555 555 5555
  // 5555555555
  // 1 555 555 5555

  return str.test(pattern);

}



telephoneCheck("555-555-5555");
