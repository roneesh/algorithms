function mergeSort(alist) {
	console.log("Splitting ", alist);
	if (alist.length > 1) {
		var mid = Math.floor(alist.length / 2);
		var left = alist.slice(0, mid);
		var right = alist.slice(mid);

		mergeSort(left);
		mergeSort(right);

		var i = 0,
			j = 0,
			k = 0;

		while ( i < left.length && j < right.length) {
			if (left[i] < right[j]) {
				alist[k] = left[i]
				i++;
			} else {
				alist[k] = right[j];
				j++
			}
			k++;
		}

		while (i < left.length) {
			alist[k] = left[i];
			i++;
			k++;
		}

		while (j < right.length) {
			alist[k] = right[j];
			j++;
			k++;
		}
	}
	console.log("Merging ", alist);
}

var alist = [3,6,5,2];
mergeSort(alist);
console.log(alist);