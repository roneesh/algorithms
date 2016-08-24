//This is a brute-force solution of game of life
//It checks the same spot multiple times, with a
//few checks to ensure null spots aren't checked

var A = 'A',
	_ = '_',
	board = [
		[_,_,_,_,_],
		[_,_,A,A,_],
		[_,_,A,A,_],
		[_,_,_,A,A],
		[_,_,_,A,A]
	],
	generation = 1,
	checks = 0;


function iterateGameBoard(board) {
	var coordsToOff = [],
		coordsToOn = [];

	for (var y = 0; y < board.length; y++) {
		for (var x = 0; x < board[y].length; x++) {
			var coord = [y,x];
				livingNeighbors = getLivingNeighbors(board, x, y);
			if (livingNeighbors < 2)   coordsToOff.push(coord);
			if (livingNeighbors === 3) coordsToOn.push(coord);
			if (livingNeighbors > 3)   coordsToOff.push(coord);
		}
	}
	for (var i = 0; i < coordsToOff.length; i++) {
		board[coordsToOff[i][0]][coordsToOff[i][1]] = '_';
	}	
	for (var i = 0; i < coordsToOn.length; i++) {
		board[coordsToOn[i][0]][coordsToOn[i][1]] = 'A';
	}
	return true;
}

function getLivingNeighbors(board, x, y) {
	var livingNeighbors = 0;
	if (y - 1 > 0) {
		if (x - 1 > 0) {
			livingNeighbors += checkSpot(board, y - 1, x - 1);
		}
		if (x + 1 < board[y].length) {
			livingNeighbors += checkSpot(board, y - 1, x + 1);
		}
		livingNeighbors += checkSpot(board, y - 1, x);
	}
	if (y + 1 < board.length) {
		if (x - 1 > 0) {
			livingNeighbors += checkSpot(board, y + 1, x - 1);
		}
		if (x + 1 < board[y].length) {
			livingNeighbors += checkSpot(board, y + 1, x + 1);
		}
		livingNeighbors += checkSpot(board, y + 1, x);
	}
	if (x - 1 > 0) {
		livingNeighbors += checkSpot(board, y, x - 1);
	}
	if (x + 1 < board[y].length) {
		livingNeighbors += checkSpot(board, y, x + 1);
	}
	return livingNeighbors;
}


function checkSpot(board, y, x) {
	checks++;
	if (board[y] && board[y][x] === 'A') {
		return 1;
	} else {
		return 0;
	}
}

function printBoard(board) {
	process.stdout.write('\033c')
	var rows = board.length;
	generation++;
	console.log('Generation: ', generation);
	console.log('Checks done: ', checks);
	console.log('');
	for (var i = 0; i < rows; i++) {
		console.log(board[i]);
	}
	console.log('');
}

setInterval(function() {
	iterateGameBoard(board);
	printBoard(board); 
}, 1000);
