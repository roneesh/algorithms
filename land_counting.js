var _ = '_',
	X = 'X',
	map = [
	[_,_,_,_,_,X,X,X,X,X,_,_],
	[_,_,_,_,X,X,X,X,X,_,_,_],
	[_,_,_,X,X,X,_,X,X,X,X,X],
	[_,_,X,_,X,_,_,_,_,_,_,_],
	[_,_,X,_,_,X,X,X,X,X,_,_]
];

// In english:
// 1. We are going to plop you in the middle of this 2D matrix
// 2. you should be on land, if so, size = 1
// 3. Recursively call this function in each direction
// 4. Add their size to our size of 1
// 5. Return the total size.
// 6. But this is recursion...
// 7. So Each time we recursively call this function, it also
//    searches in each direction.
// 8. To make sure we don't double count land, after we find
//    some land, we turn it to 'C', so it's not double counted
// 9. Once we hit '_' or array bounds, our functions start returning
// 10. Finally all functions return, and are added to our 
//     size = 1 variable at the inital world[1][5];
// 11. That's recursion for you.

function continentSize(world, y, x) {
	if (y < 0 || y >= world.length) {
		return 0;
	}
	if (world[y][x] !== 'X') {
		return 0; 
	}

	var size = 1;
	world[y][x] = 'C'; //C means counted! basically it's not X!

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
var res = continentSize(map, 1, 5);
console.log(res);