/* sum every # in the array, but the array can include 
   sub-arrays that have numbers as well */

var test = [
	1,
	5,
	'hello',
	{},
	['car', 'block', 15]
];

var sum = recursive_array_sum(test); // returns 21
console.log(sum);

function recursive_array_sum(arr) {
	var sum = 0;

	for (var i = 0; i < arr.length; i++) {
		if (typeof arr[i] === 'number') {
			sum += arr[i];
		}
		if (Array.isArray(arr[i])) {
			sum += recursive_array_sum(arr[i]);
		}
	}

	return sum;
}