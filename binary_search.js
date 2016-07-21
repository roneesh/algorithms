var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

function binarySearch(arr, value) {

	var min = 0,
		max = arr.length - 1;

	guess = Math.floor((max - min) / 2);
	
	if (arr[0] === value) return 0;
	if (arr[arr.length - 1] === value) return arr.length - 1;

	while (max - min > 1) {
		console.log(min, max, guess); // 0, 12, 6
		if (arr[guess] === value) {
			return guess;
		}
		if (arr[guess] > value) {
			max = guess;
			guess = Math.floor((max - min) / 2);
		} else if (arr[guess] < value) {
			min = guess;
			guess += Math.floor((max - min) / 2);
		}

	}

	if (max - min === 1) {
		return -1;
	}

}

console.log(binarySearch(primes, 89));