// A recursive function that runs until the stack overflows
function isRecursive(count) {
	count++;
	console.log(count);
	return isRecursive(count);
}
isRecursive(0);