// Implementing recursive factoring in one line with a ternary

function factorial(n) {
	return (n === 1) ? n : n * factorial(n - 1);
}
console.log(factorial(30))