/* 
	NOTE: This is an incomplete solution, kept for reference only.
	Solutions 1 and 3 are complete and working

	This implementation will only check from the area
	near the first node to the area near the last node	

	Right now we are getting the first node to check,
	which is NOT the first living one, but the first one
	that could be turned on by neighbors. if the y/x is
	near the uppper bounds we will not check every side of it

*/

/*
	STEPS OF SOLUTION:
	1. run buildBoard with rows, cols and livingMembers
	   - this allows us to create the smaller box that we'll check
	2. run checkNodes of our smaller subset
	3. update the game board based on the results of this small analysis
*/

GameOfLife.prototype.buildBoard = function(rows, cols, livingMembers) {
	var board = [];
	for (var i = 0; i < rows; i++) {
		board.push([]);
		for (var j = 0; j < cols; j++) {
			board[i].push('_');
		}
	}
	//set the lower Y to check 
	this.lowestY = livingMembers[0][0];
	this.highestY = livingMembers[0][0];
	this.lowestX = livingMembers[0][1];
	this.highestX = livingMembers[0][1];
	for (var k = 0; k < livingMembers.length; k++) {
		var thisNode = livingMembers[k];
		if (thisNode[0] < this.lowestY) {
			this.lowestY = thisNode[0];
		}
		if (thisNode[0] > this.highestY) {
			this.highestY = thisNode[0];
		}
		if (thisNode[1] < this.lowestX) {
			this.lowestX = thisNode[1];
		}
		if (thisNode[1] > this.highestX) {
			this.highestX = thisNode[1];
		}
		board[livingMembers[k][0]][livingMembers[k][1]] = 'A'
	}

	/* so at most our first node to check is the top-left
	node from our first living node, but if that is out of
	bounds via y then we want the y, x-1 node, and
	if that is out of bounds then it's just the node */
	if (this.lowestY - 1 >= 0 && this.lowestX - 1 >= 0) {
		this.fntc = [this.lowestY - 1, this.lowestX - 1]
	} else if(this.lowestX - 1 >= 0) {
		this.fntc = [this.lowestY, this.lowestX - 1]
	} else {
		this.fntc = [this.lowestY, this.lowestX];
	}

	/* last node to check is same as first living node, 
	   just for the other side of the board 
	*/
	if (this.highestY + 1 < rows && this.highestX + 1 <= cols) {
		this.lntc = [this.highestY + 1, this.highestX + 1]
	} else if (lln[0] + 1 <= cols) {
		this.lntc = [this.highestY, this.highestX + 1]
	} else {
		this.lntc = [this.highestY, this.highestX];
	}

	this.maxXToCheck = this.highestX + 1 <= cols ? this.highestX + 1 : this.highestX;

	return board;
}

GameOfLife.prototype.checkNodes = function() {
	// This has to be modified to only check within the 
	// range of first/last nodes to check;

	// Also dont check any points in the valid range whose
	// x is above the this.maxXToCheck

	// Also it needs logic to make sure on the first
	var row = this.fntc[0],
		lastRow = this.lntc[0],
		lastCol = this.maxXToCheck,
		coordsToOff = [],
		coordsToOn = [];

	for (; row <= lastRow; row++) {
			for (var col = 0; col <= lastCol; col++) {
			var livingNeighbors = this.livingNeighborsOfSingleSpot(row, col);

		}
	}
	// return livingNeighbors;
}

GameOfLife.prototype.livingNeighborsOfSingleSpot = function(y, x) {
	// These if statements need to make sure they dont
	// check spots below the range of y/x of first and last
	// node to check

	// var neighbors = 0,
	// 	lowerYonBoard = (y - 1 > 0),
	// 	upperYonBoard = this.board[y + 1],
	// 	lowerXonBoard = (x - 1 > 0);

	// if (lowerYonBoard) {
	// 	if (lowerXonBoard) {
	// 		neighbors += this.checkSpot(y - 1, x - 1);
	// 	}
	// 	neighbors += this.checkSpot(y - 1, x + 1);
	// 	neighbors += this.checkSpot(y - 1, x);
	// }
	// if (upperYonBoard) {
	// 	if (lowerXonBoard) {
	// 		neighbors += this.checkSpot(y + 1, x - 1);
	// 	}
	// 	neighbors += this.checkSpot(y + 1, x + 1);
	// 	neighbors += this.checkSpot(y + 1, x);
	// }
	// if (lowerXonBoard) {
	// 	neighbors += this.checkSpot(y, x - 1);
	// }
	// if (this.board[y] && x + 1 < this.board[y].length) {
	// 	neighbors += this.checkSpot(y, x + 1);
	// }
	// return neighbors;
}

GameOfLife.prototype.checkSpot = function(y, x) {
	this.checks++;
	return (this.board[y] && this.board[y][x] === 'A') ? 1 : 0;
}

GameOfLife.prototype.printBoard = function() {
	process.stdout.write('\033c')
	var rows = this.board.length;
	console.log('Generation:  ', this.generation);
	console.log('Checks made: ', this.checks);
	console.log('');
	for (var i = 0; i < rows; i++) {
		console.log(this.board[i]);
	}
	console.log('');
}

GameOfLife.prototype.printDiagnostic = function() {
	process.stdout.write('\033c')
	var rows = this.board.length;
	var props = Object.getOwnPropertyNames(this);
	var that = this;
	console.log('');
	for (var i = 0; i < rows; i++) {
		console.log(this.board[i]);
	}
	console.log('');
	props.forEach(function(prop) {
		if (prop !== 'board') {
			console.log(prop + ' : ' + that[prop]);
		}
	})
};

GameOfLife.prototype.runSimulation = function(speed) {
	var that = this;
	setInterval(function() {
		that.advanceGeneration();
		that.printBoard();
	}, speed);
};

GameOfLife.prototype.advanceGeneration = function() {
	this.generation++;
};

function GameOfLife(rows, cols, livingMembers) {
	this.board = this.buildBoard(rows, cols, livingMembers)
	this.generation = 1;
	this.checks = 0;
	// this.livingNeighbors = this.getLivingNeighbors(this.board);
}

var g = new GameOfLife(10, 10, [[1,2],[2,2],[3,2]]);
console.log(g.board);
g.printDiagnostic();
g.checkNodes();