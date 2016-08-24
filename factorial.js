// Implementing recursive factoring in one line with a ternary
function factorial(n) {
	return (n === 1) ? n : n * factorial(n - 1);
}
console.log(factorial(30))

// Attaching it to the Math object for fun
Math.factorial = function(n) {
	return (n === 1) ? n : n * factorial(n - 1);
}
console.log(Math.factorial(30))