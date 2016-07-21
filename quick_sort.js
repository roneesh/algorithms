//an implementation of quick sort

function quickSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}

	var sort,
		pivot = [arr.pop()]; 

	console.log('pivot: ', pivot);

	var left = [],
		right = [];

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > pivot[0]) {
			right.push(arr[i]);
		} else if (arr[i] <= pivot[0]) {
			left.push(arr[i]);
		}
	}

	sort = quickSort(left).concat(pivot).concat(quickSort(right));
	return sort;
}

var test1 = [9,7,5,11,11,11,12,11,2,14,3,10,6,14];

console.log(quickSort(test1))