function titleCase(str) {
  
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));