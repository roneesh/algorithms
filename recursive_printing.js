//print a string backwards recursively
function backwards(str) {
	console.log(str);
	if (str.length === 1) {
		return str;
	}
	var last = str.slice(-1);
	return print(last, backwards(str.slice(0, str.length - 1)));
}

//using a print function mostly for logging
function print(char, restOfStr) {
	console.log(char, restOfStr);
	return char + restOfStr;
}

console.log(backwards('abcdefghiklmonopqrstuvwxyz'));