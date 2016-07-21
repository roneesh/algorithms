var data = [3,1,2,4,7,3,2,1,65,7,3,5,693,2];

function merge_sort(arr) {
	// if (arr.length === 0) throw 'array is empty'

	if (arr.length === 1) return arr;

	var mid = Math.floor( (arr.length - 1) / 2);
	if (arr.length === 2) mid = 1;

	return sort(merge_sort(arr.slice(0, mid)), merge_sort(arr.slice(mid)));
}

function sort(arr1, arr2) {

	var result = []

	while (arr1.length && arr2.length) {
		console.log(arr1, arr2, result)
		if (arr1[0] < arr2[0]) {
			result.push(arr1.shift());
		} else if (arr2[0] < arr1[0]) {
			result.push(arr2.shift());
		} else {
			result.push(arr1.shift())
		}
	}

	while (arr1.length) {
		result.push(arr1.shift());
	}

	while (arr2.length) {
		result.push(arr2.shift());
	}

	return result;
}

// assume each array is sorted if len > 1

console.log(merge_sort(data));