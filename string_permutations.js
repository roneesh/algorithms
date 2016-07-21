//Print all permutations of a string

//which is really just print all permutations of an array
// ['ab', 'ba']
// ['abc', 'acb', 'bca', 'bac', 'cba', 'cab']

// 'a' -> 'a'
// add b -> 'a' + b, b + 'a'

// 'abc'
// 'a' -> 'bc', 'cb'
// 'b' -> 'ac', 'ca'

function permutation(arr) {

	if (arr.length === 1) {
		return [arr];
	}

	var result = [];

	for (var i = 0; i < arr.length; i++) {
		var char = arr[i];
		var rest = arr.slice(0, i).concat(arr.slice(i+1));
		console.log('char: ', char, 'rest: ', rest);
		var restPerms = permutation(rest);
		console.log('restPerms: ', restPerms);
		restPerms.forEach(function(perm) {
			result.push(perm.concat([char]));
		});
		console.log('result:', result)
	}
	return result;
}
// console.log(permutation(['a', 'b', 'c']));




function perm(arr) {
	if (arr.length === 1) return [ arr ];

	var result = [];

	for (var i = 0; i < arr.length; i++) {
		var char = arr[i];
		var restOfArr = arr.slice(0, i) + arr.slice(i+1);
		var restPerms = perm(restOfArr);
		restPerms.forEach(function(perm) {
			result.push(perm.concat(char));
		})
	}

	return result;
}

console.log(perm(['a','b']));








