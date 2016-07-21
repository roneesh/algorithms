//Just re-doing merge sort without looking at my older solution

var opCount = 0;

function mergeSort(arr) {
	console.log(arr);
	if (arr.length < 2) {
		return arr;
	}
	var midIndex = Math.floor( (arr.length - 1) / 2);
	if (arr.length === 2) midIndex = 1;

	return merge(mergeSort(arr.slice(0, midIndex)), mergeSort(arr.slice(midIndex)));
}

function merge(arr1, arr2) {
	console.log('arr1 is: ', arr1, '\narr2 is: ', arr2);
	var result = [],
		operationCount = 0;
	while(arr1.length && arr2.length) {
		if (arr1[0] <= arr2[0]) {
			result.push(arr1.shift());
		} else if (arr2[0] < arr1[0]) {
			result.push(arr2.shift());
		}
		opCount++;
	}
	while (arr1.length) {
		result.push(arr1.shift());
		opCount++;
	}
	while (arr2.length) {
		result.push(arr2.shift());
		opCount++;
	}
	console.log('merge operation count: ', opCount);

	return result;
}

//test of merge function
// console.log(merge([1,3,5,7,9], [2,4,6,11]));

//test of merge sort function
console.log(mergeSort([7,9,1]));