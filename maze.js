var callCount = 0,
	_ = '_',
	X = 'X',
	F = 'F',
	maze = [
		[_,_,_,_,_,X,X,X,X,X],
		[X,X,X,X,_,X,X,X,X,X],
		[X,_,_,_,_,_,_,_,_,_],
		[X,_,X,X,X,X,X,X,X,_],
		[X,_,X,X,X,X,X,X,X,_],
		[X,_,X,X,_,_,_,X,X,_],
		[X,_,X,X,_,X,_,X,X,_],
		[X,_,X,X,_,X,F,X,X,_],
		[X,_,_,X,_,X,X,X,X,_],
		[X,_,_,_,_,_,_,_,_,_]
	];

function traverseMaze(maze, y, x) {
	callCount++;
	if (y < 0 || y > maze.length - 1 || x > maze[y].length - 1 || x < 0) {
		return [];
	}
	if (maze[y][x] === 'E' || maze[y][x] === 'X') {
		return [];
	}
	if (maze[y][x] === 'F') {
		maze[y][x] = 'E';
		return [ [y,x] ]; 
	}

	path = [ [y,x] ];
	maze[y][x] = 'E';

	path = path.concat(traverseMaze(maze, y - 1, x));
	path = path.concat(traverseMaze(maze, y + 1, x));
	path = path.concat(traverseMaze(maze, y, x + 1));
	path = path.concat(traverseMaze(maze, y, x - 1));

	// this if statement is the secret sauce, because it says that
	// ultimately, only return the path if one of the four
	// path calls above returned a path, and guess what, the only
	// time that happens is if a calll finds the 'F',
	// so we only get one path that the recursive tree returns
	// a path for
	if (path.length > 1) { 
		return path;
	} else {
		return [];
	}
}

console.log(traverseMaze(maze, 0, 0));
console.log(callCount);