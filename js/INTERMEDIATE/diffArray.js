function diffArray(arr1, arr2) {
  var newArr = [];
  
  // Iterates through arr1
  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      newArr.push(arr1[i]);
    }
  }

  // Iterates through arr2
  for (var a = 0; a < arr2.length; a++) {
    if (arr1.indexOf(arr2[a]) === -1) {
      newArr.push(arr2[a]);
    }
  }
  
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// TODO:  Optimize this function by utilizing 
//        the Array.prototype.filter() method.