// Input: An unsorted array, and a value i
// Output: the ith order statistic, i.e. the ith smallest
//         element of the input array
// Example: [10,8,2,4], i = 3 -> 8, becase [2,4,8,10], i=3
//			is the third element
// Assume: Array elements are distinct

function Rselect(arr, position) {
	if (position > arr.length) return 'index of ' + index + ' is too large!'
	if (arr.length === 1) return arr[0];

	var len = arr.length;
		randomIndex = Math.floor(Math.random()*len);
		pivot = arr[randomIndex];
		left = [],
		right = [];

	for (var i = 0; i < len; i++) {
		if (i === randomIndex) continue;
		if (arr[i] < pivot) {
			left.push(arr[i])
		} else if (arr[i] > pivot) {
			right.push(arr[i])
		}
	}
	var pivotPosition = left.length + 1;

	if (pivotPosition === position) {
		return pivot;
	} else if(pivotPosition > position) {
		return Rselect(left, position);
	} else if (pivotPosition < position) {
		return Rselect(right, position - pivotPosition);
	}	

}

var test1 = [14,2,12,11,10,9,8,7,6,5,4,3,13,1]
console.log(Rselect(test1, 7)) // returns 2