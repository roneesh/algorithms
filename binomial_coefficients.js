function binomial_coefficients(m,n) {
	var bc = [];
	for (var i = 0; i < m; i++) {
		bc.push([1])
	}
	for (var j = 0; j < bc.length; j++) {
		bc[j][j] = 1;
	}
	for (var i = 0; i < bc.length; i++) {
		for (var j = 1; j < bc[i].length - 1; j++) {
			bc[i][j] = bc[i - 1][j - 1] + bc[i - 1][j]
		}
	}
	return bc[m-1][n-1]
}
// console.log(binomial_coefficients(6,4));

function binomial_coefficients_recursive(row) {
	if (row === 1) {
		return [1];
	}
	if (row === 2) {
		return [1, 1];
	}
	var prior_row = binomial_coefficients_recursive(row - 1),
		new_row = [1];
	for (var i = 0; i < row - 2; i++) {
		var num = prior_row[i] + prior_row[i+1];
		new_row.push(num);
	}
	new_row.push(1);
	return new_row;
}

binomial_coefficients_recursive(6);