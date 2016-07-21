//find the # of inversions in an array
//[1,2,4,3] has one inversion, 4 is above 3

//use recursion because without it, it's a simple n^2 problem

//n^2 solution
/*
for (var i = 0; i < arr.lenth; i++) {
	for (var j = i+1; j < arr.length; j++) {
		if arr[i] < arr[j] {
			inversions++;
		}
	}
} */

//Just re-doing merge sort without looking at my older solution
var inversions = 0;

function inversionCount(arr) {
	if (arr.length === 1) {
		return arr;
	}
	var midIndex = Math.floor( (arr.length - 1) / 2);
	if (arr.length === 2) midIndex = 1;

	return count(inversionCount(arr.slice(0, midIndex)), inversionCount(arr.slice(midIndex)));
}

function count(arr1, arr2) {
	var result = [];
	while(arr1.length && arr2.length) {
		if (arr1[0] <= arr2[0]) {
			result.push(arr1.shift());
		} else if (arr2[0] < arr1[0]) {
			result.push(arr2.shift());
			inversions += arr1.length
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

//test of merge function
// console.log(merge([1,3,5,7,9], [2,4,6,11]));

//test of merge sort function
console.log(inversionCount([18,1,2,1]));
console.log(inversions);

//OK - So it turns out that to get inversions, you just need to add 1 line of code
