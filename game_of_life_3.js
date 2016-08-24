/* 
	This implementation will use dictionary tallies to only check the
	pertinent squares and nothing else
*/

/*
	STEPS OF SOLUTION:
	1. Iterate through each living node and then put it and
	   it's 8 surrounding nodes in the dictionary
	2. For every dictionary entry, increment it's value every
	   time it's encountered by a living node
	3. Iterate through the dictioary and if a nodes value meets
	   the living conditions, push it to a return array
*/

GameOfLife.prototype.getNextGeneration = function(rows, cols, livingNodes) {
	var dict = {},
		livingReference = {},
		nodesToTurnOn = [],
		that = this;

	livingNodes.forEach(function(node) {
		var y = node[0],
			x = node[1],
			lowerY,
			upperY,
			lowerX,
			upperX;

		if (y < 0 || x < 0 || y > rows - 1 || x > cols - 1)  {
			return;
		}
		
		dict[y] = dict[y] || {};
		livingReference[y] = livingReference[y] || {};
		livingReference[y][x] = true;
		dict[y][x] = dict[y][x] ? dict[y][x] : 0;

		lowerY = y - 1 >= 0,
		upperY = y + 1 < rows,
		lowerX = x - 1 >= 0,
		upperX = x + 1 < cols;

		if (lowerY) {
			dict[y-1] = dict[y-1] || {};
			dict[y-1][x] = dict[y-1][x] + 1 || 1;
			if (upperX) {
				dict[y-1][x+1] = dict[y-1][x+1] + 1 || 1;
			}
			if (lowerX) {
				dict[y-1][x-1] = dict[y-1][x-1] + 1 || 1;
			}
		}
		if (upperY) {
			dict[y+1] = dict[y+1] || {};
			dict[y+1][x] = dict[y+1][x] + 1 || 1;
			if (upperX) {
				dict[y+1][x+1] = dict[y+1][x+1] + 1 || 1;
			}
			if (lowerX) {
				dict[y+1][x-1] = dict[y+1][x-1] + 1 || 1;
			}
		}
		if (upperX) {
			dict[y][x+1] = dict[y][x+1] + 1 || 1;
		}
		if (lowerX) {
			dict[y][x-1] = dict[y][x-1] + 1 || 1;
		}
	});

	for (var i in dict) {
		for (var j in dict[i]) {
			if (dict[i][j] === 3 || dict[i][j] === 2 && livingReference[i] && livingReference[i][j]) {
				var node = [parseInt(i,10), parseInt(j,10)];
				nodesToTurnOn.push(node);
			}
		}
	}
	this.generation++;
	return nodesToTurnOn;
}

GameOfLife.prototype.printBoard = function() {
	process.stdout.write('\033c')
	console.log('Generation:  ', this.generation);
	var rows = [];
	for (var i = 0; i < this.rows; i++) {
		rows.push([])
		for (var j = 0; j < this.cols; j++) {
			rows[i].push('_');
		}
	}
	this.livingMembers.forEach(function(livingMember) {
		rows[livingMember[0]][livingMember[1]] = 'A'
	});
	for (var k = 0; k < rows.length; k++) {
		console.log(rows[k]);
	}
	console.log('');
}

GameOfLife.prototype.runSimulation = function(speed) {
	var that = this;
	that.printBoard();
	setInterval(function() {
		process.stdout.write('\033c')
		that.livingMembers = that.getNextGeneration(that.rows, that.cols, that.livingMembers);
		that.printBoard();
	}, speed);
};

function GameOfLife(rows, cols, livingMembers) {
	this.livingMembers = livingMembers;
	this.rows = rows;
	this.cols = cols;
	this.generation = 1;
}

var g = new GameOfLife(10, 10, [ [ 1, 2 ], [ 2, 2 ], [ 2, 3 ] ] );
g.runSimulation(1000);
