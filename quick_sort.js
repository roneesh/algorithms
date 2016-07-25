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

var test = [];
for (var i = 0; i < 100; i++) {
	test[i] = Math.floor(Math.random() * 500)
}

console.log(quickSort(test))