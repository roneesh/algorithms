/* 
This is a merge sort which only operates on the, 
array itself, no copies made.

Also it's recursion is different, the function only 
runs of it's not the base case, if it is the base case,
then the mergeSort does nothing. The base case is still
just when the start index and end index is just 1 away,
which means our array is of length 1
*/

function mergeSort(alist, start, end) {
	if (end - start > 1) {
		var mid = start + Math.floor((end - start) / 2);

		mergeSort(alist, start, mid);
		mergeSort(alist, mid, end);

		var i = start,
			j = mid;

		while ( i < mid && j < end) {
			if (alist[i] < alist[j]) {
				i++;
			} else {
				var temp = alist[j];
				for (var k = j; k > i; k--) {
					alist[k] = alist[k-1];
				}
				alist[i] = temp;		
				i++;
				j++;
				mid++;
			}
			console.log('\t', alist);
		}
	}
}

var alist = [37, 96, 1, 43, 22, 11, 979, 444, 21]
console.log('start:  ', alist);
mergeSort(alist, 0, alist.length);
console.log('end:    ', alist);