var storage = [];

function hash(str) {
	var hash = 0,
		i = 0,
		char,
		len = str.length;
	if (str.length === 0) return hash;

	for (; i < len; i++) {
		char = str.charCodeAt(i);
		// The secret sauce, so if you do a left bitwise shift of 5 bits, you get
		// a VERY large number, and this should be what makes collisions unlikely
		hash  = ((hash << 5) - hash) + char;
		hash |= 0;
	}
	return hash;
}

function putInStorage(key, value) {
	storage[hash(key)] = value;
}

function getFromStorage(key) {
	return storage[hash(key)];
}

putInStorage('roneesh', {'foo' : 'bar'});
putInStorage('fizz', 13);
console.log(getFromStorage('roneesh'));
console.log(getFromStorage('fizz'));
console.log(String(hash))
console.log(storage.length);