def palindrome(word):

	word = "".join(i for i in word if i.isalnum()).lower()

	if word == word[::-1]:
		return True
	else:
		return False


print palindrome("0_0-\:/-0_0")