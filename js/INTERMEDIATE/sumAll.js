/**
 * Sums together all integers between 
 * lowest and highest value passed in array (inclusive)
 * @param  {array} 	arr 	array with 2 numbers
 * @return {int}	sum     the sum of all numbers
 */
function sumAll(arr) {
	var min = Math.min(...arr);
	var max = Math.max(...arr);
	
	var list = [];
	for (var i = min; i <= max; i++) {
		list.push(i);
	}

	var sum = 0;
	for (var a = 0; a < list.length; a++) {
		sum = sum + list[a];
	}

	return sum;
}

sumAll([1, 6]);

/**
 * Faster version of the above
 */
function sumAll2(arr) {
	var min = Math.min(...arr);
	var max = Math.max(...arr);

	var list = [];
	while (min <= max) {
		list.push(min++);
	}

	var sum = 0;
	var a = 0;
	while (a < list.length) {
		sum += list[a];
		a++;
	}

	return sum;
}

sumAll2([1, 6]);
