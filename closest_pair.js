var points = [
	[-4,0],
	[4,0],
	[0,4],
	[0,-4],
	[1,1],
	[-1,1]
];

console.log(closestPair(points));

function closestPair(points) {
	// base case, brute force if list is 3 points or less
	if (points.length <= 3) {
		return bruteForce(points);
	}

	// I could use my own merge sort here, but might as
	// well leverage JS's built in merge sort :-)
	var Px = points.slice(0).sort(function(x, y) {
		return x[0] > y[0]
	});
	var Py = points.slice(0).sort(function(x, y) {
		return x[1] > y[1];
	})

	console.log('Px: ', Px);
	console.log('Py: ', Py);
	var mid = Math.floor(Px.length / 2);

	var Qx = Px.slice(0, mid),
		Rx = Px.slice(mid);
	console.log(Qx, Rx)
	var Qdelta = closestPair(Qx);
	var Rdelta = closestPair(Rx);
	var minQRdelta = Math.min(Qdelta, Rdelta);
	var xBar = Qx[Qx.length - 1][0];
	var SplitPairDelta = closestSplitPair(Px, Py, minQRdelta, xBar);
	console.log('Qdelta: ', Qdelta);
	console.log('Rdelta: ', Rdelta);
	console.log('SplitD: ', SplitPairDelta);
	var minDelta = Math.min(Qdelta, Rdelta, SplitPairDelta);

	return minDelta;
}

function closestSplitPair(Px, Py, minQRdelta, xbar) {
	// Sy is a subset of Py, where the x coords are between
	// xbar - minQRdelta and xbar + minQRdelta
	var minX = xbar - minQRdelta,
		maxX = xbar + minQRdelta,
		Sy = []

	for (var i = 0; i < Py.length; i++) {
		if (Py[i][0] > minX && Py[i][0] < maxX) {
			Sy.push(Py[i]);
		}
	}

	var minDist = Infinity;
	for (var i = 0; i < (Sy.length - 1); i++) {
		for (var j = i + 1; j < Math.min(7, Sy.length - i); j++) {
			var dist = distance(Sy[i], Sy[j]);
			minDist = dist < minDist ? dist : minDist;
		}
	}

	return minDist;
}

function distance(p1, p2) {
	return Math.sqrt(Math.pow((p2[0] - p1[0]),2) + Math.pow((p2[1] - p1[1]),2));
}

function bruteForce(arr) {
	var lowestDistance = Infinity;
	for (var i = 0; i < arr.length; i++) {
		for (var j = i + 1; j < arr.length; j++) {
			var dist = distance(arr[i], arr[j]);
			lowestDistance = (dist < lowestDistance) ? dist : lowestDistance;  
		}
	}
	return lowestDistance;
}