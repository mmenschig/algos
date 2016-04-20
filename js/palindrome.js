function palindrome(str) {

	var str_clean = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
	var array_reverse = str_clean.split("").reverse();
	var str_reverse = array_reverse.join("")


	if (str_clean === str_reverse) {
		return true;
	} else {
		return false;
	}
}

palindrome("palindrome");
