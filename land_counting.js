var _ = '_',
	X = 'X',
	map = [
		[_,_,_,_,_,X,X,X,X,X,_,_],
		[_,_,_,_,X,X,X,X,X,_,_,_],
		[_,_,_,X,X,X,_,X,X,X,X,X],
		[_,_,X,_,X,_,X,_,X,_,_,_],
		[_,_,X,_,_,X,X,X,X,X,_,_],
		[_,_,_,_,_,_,_,X,X,_,_,_],
		[_,_,_,_,_,_,_,X,X,_,_,_],
		[_,X,_,_,X,_,_,X,X,X,X,X]
	],
	landMasses = {};

// In english:
// 1. We are going to start you at some x,y coordintes in this map
// 2. If you are on land 'X', then size = 1
// 3. Recursively call this function in each direction
// 4. Add their size to our size of 1
// 5. Return the total size.
// 6. But this is recursion...
// 7. So Each time we recursively call this function, it also
//    searches in each direction.
// 8. To make sure we don't double count land, after we find
//    some land, we turn it to 'E', so it's not double counted
// 9. Once we hit '_' or array bounds, our functions start returning
// 10. Finally all functions return, and are added to our 
//     size = 1 variable at the inital world[1][5];
// 11. That's recursion for you.

for (var i = 0; i < map.length; i++) {
	for (var j = 0; j < map[i].length; j++) {
		if (map[i][j] === 'X') {
			var key = i.toString() + ',' + j.toString();
			landMasses[key] = continentSize(map, i, j)
		}
	}
}
console.log(map);
console.log(landMasses);

function continentSize(world, y, x) {
	if (y < 0 || y >= world.length) {
		return 0;
	}
	if (world[y][x] !== 'X') {
		return 0; 
	}

	var size = 1;
	world[y][x] = 'E'; 
	//E means explored! basically it's not X, so it won't count

	size = size + continentSize(world, y - 1, x - 1);
	size = size + continentSize(world, y - 1, x);
	size = size + continentSize(world, y - 1, x + 1);
	size = size + continentSize(world, y, x - 1);
	size = size + continentSize(world, y, x + 1);
	size = size + continentSize(world, y + 1, x - 1);
	size = size + continentSize(world, y + 1, x);
	size = size + continentSize(world, y + 1, x + 1);	

	return size;
}