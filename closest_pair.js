function distance(p1, p2) {
	return Math.sqrt(Math.pow((p2[0] - p1[0]),2) + Math.pow((p2[1] - p1[1]),2));
}

var points = [
	[5,1],
	[6,2],
	[1,1],
	[1,2]
];

//Assume - no ties between points