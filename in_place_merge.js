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