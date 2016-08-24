	var collatzes = {
	1 : 1
}

function maxCollatz(upperBound) {
	var highestCollatz = 1,
		lengthOfHighest = 1;
	for (var i = 2; i < upperBound; i++) {
		var coll = collatz(i);
		if (coll > lengthOfHighest) {
			highestCollatz = i;
			lengthOfHighest = coll;
		}
	}
	return highestCollatz;
}

function collatz(number) {
	var length = 0;
	if (collatzes[number]) {
		return collatzes[number];
	} else if (number % 2 === 0) {
		length = 1 + collatz(number / 2);
	} else {
		lenfgth = 2 + collatz(((number * 3) + 1) / 2);
	}
	collatzes[number] = length;
 	return length;
}

console.time('maxCollatz');
console.log(maxCollatz(1000000));
console.timeEnd('maxCollatz');