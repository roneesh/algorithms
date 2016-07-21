var test = [31, 41, 59, 26, 41, 58];

function insertion_sort(arr) {

	for (var i = 1; i < arr.length; i++) {
		var val = arr[i]; //element to check

		// check elements below it, starting with i-1
		for (var j = i - 1; i > 0; i--) {
			if (arr[j] > val) {
				arr[i] = arr[j];
			} else {
				break;
			}
		}
		arr[j] = val;

	}

	return arr;
}

console.log(insertion_sort(test));