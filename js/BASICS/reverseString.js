function reverseString(string) {
	var string_array = [];
	var result_array = [];

	for (var i = 0; i < string.length; i++) {
		string_array.push(string[i]);
	}

	result_array = string_array.reverse();
	return result_array.join("");

}

reverseString("hello");