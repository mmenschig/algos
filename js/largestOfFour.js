function largestOfFour(arr) {

	var resultArr = [];

	for (var i = 0; i < arr.length; i++) {
		resultArr.push(Math.max(...arr[i]));
	}
	
	return resultArr;
}
