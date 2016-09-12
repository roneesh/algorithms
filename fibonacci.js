var recursion_count = 0,
	dynamic_count = 0,
	fib_num = 25;

function fibonacci(n) {
	recursion_count++;
	if (n === 0) return 0;
	if (n === 1) return 1;
	return fibonacci(n - 1) + fibonacci(n - 2);
}
fibonacci(fib_num)

var fibs = {
	0: 0,
	1: 1
}

function dynamic_fib(n) {
	dynamic_count++;
	if (fibs[n]) {
		return fibs[n];
	}
	if (n === 0) return fibs[0];
	if (n === 1) return fibs[1];
	fibs[n] = dynamic_fib(n - 1) + dynamic_fib(n - 2)
	return fibs[n]
}
dynamic_fib(fib_num);

console.log(recursion_count, dynamic_count)