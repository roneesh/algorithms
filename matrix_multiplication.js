// NOTE: For these we will assume we always get
// square matrix input of even size!
// n^3 run time

var x2 = [[1,2],[3,4]];
var x4 = [[1,1,1,1],[2,2,2,2],[3,3,3,3],[4,4,4,4]];
var y2 = [[5,5],[6,6]];
var y4 = [[5,5,5,5],[6,6,6,6],[7,7,7,7],[17,8,8,8]];

function recMult(m1, m2) {

	//the base case, a 1x1 matrix
	if (m1.length === 1 && m2.length === 1) {
		if (m1[0].length !== 1 && m2[0].length !== 1) {
			throw "matricies are not of 1x1 size";
		} else {
			return [ [ m1[0][0] * m2[0][0] ] ];
		}
	}

	//if it's not the base case, split it into quadrants
	var m1quads = splitMatrixToQuandrants(m1),
		m2quads = splitMatrixToQuandrants(m2);

	//for ease, assign each quadrant to a letter
	var a = m1quads.topLeft,
		b = m1quads.topRight,
		c = m1quads.bottomLeft,
		d = m1quads.bottomRight,
		e = m2quads.topLeft,
		f = m2quads.topRight,
		g = m2quads.bottomLeft,
		h = m2quads.bottomRight;

	//make the new 2d array by quadrant
	var topLeft, topRight, bottomLeft, bottomRight;

	topLeft = addMat(recMult(a,e), recMult(b,g))
	topRight = addMat(recMult(a,f), recMult(b,h));
	bottomLeft = addMat(recMult(c,e), recMult(d,g));
	bottomRight = addMat(recMult(c,f), recMult(d,h));

	var joined = {
		'topLeft' 	 : topLeft,
		'topRight'	 : topRight,
		'bottomLeft' : bottomLeft,
		'bottomRight': bottomRight
	}

	//return the new matrix put back together into one
	return putMatrixBackTogether(joined);
}

function splitMatrixToQuandrants(mat) {
	var rows = mat.length,
		halfRows = rows / 2;

	var topLeft,    topRight,
		bottomLeft, bottomRight;

	topLeft = mat.slice(0, halfRows);
	for (var i = 0; i < topLeft.length; i++) {
		topLeft[i] = topLeft[i].slice(0, halfRows);
	}

	topRight = mat.slice(0, halfRows)
	for (var i = 0; i < topRight.length; i++) {
		topRight[i] = topRight[i].slice(halfRows);
	}

	bottomLeft = mat.slice(halfRows);
	for (var i = 0; i < bottomLeft.length; i++) {
		bottomLeft[i] = bottomLeft[i].slice(0, halfRows);
	}

	bottomRight = mat.slice(halfRows);
	for (var i = 0; i < bottomRight.length; i++) {
		bottomRight[i] = bottomRight[i].slice(halfRows);
	}

	return {
		'topLeft' 	 : topLeft,
		'topRight'	 : topRight,
		'bottomLeft' : bottomLeft,
		'bottomRight': bottomRight
	}
}

function putMatrixBackTogether(quads) {
	var mat = [];

	for (var i = 0; i < quads.topLeft.length; i++) {
		mat.push(quads.topLeft[i].concat(quads.topRight[i]));
	}
	for (var i = 0; i < quads.bottomLeft.length; i++) {
		mat.push(quads.bottomLeft[i].concat(quads.bottomRight[i]));
	}

	return mat;
}

function addMat(m1, m2) {
	var result = [];
	for (var i = 0; i < m1.length; i++) {
		result.push([])
		for (var j = 0; j < m1.length; j++) {
			result[i][j] = m1[i][j] + m2[i][j];
 		}
	}
	return result;
}

console.log(recMult(x4,y4));

// BRUTE FORCE BELOW

// function bruteForceMatrixMultiply(mat1, mat2) {
// 	if (mat1.length !== mat2.length) {
// 		return 'Matricies must be of same size.';
// 	}
// 	var rows = mat1.length;

// 	var z = [];
// 	for (var c = 0; c < mat1.length; c++) {
// 		z.push([])
// 	}

// 	mat1rows: for (var i = 0; i < mat1.length; i++) {
// 		mat1Els: for (var j = 0; j < mat1[i].length; j++) {
// 			mat2Cols: for (var k = 0; k < mat2.length; k++) {
// 				z[i].push([])
// 				var xOperand = mat1[i][j]; //mat1[0][0]
// 				var yOperand = mat2[k][j];
// 				z[i][k].push(xOperand*yOperand);
// 			}
// 		}
// 	}
// 	for (var i = 0; i < z.length; i++) {
// 		z[i] = z[i].slice(0, rows)
// 	}

// 	return z;
// }
