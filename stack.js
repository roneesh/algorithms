function Stack() {
	this.items = [];
}

Stack.prototype.push = function(data) {
	this.items.push(data);
};

Stack.prototype.pop = function() {
	return this.items.pop();
};

Stack.prototype.isEmpty = function() {
	return this.items.length === 0;
};

Stack.prototype.print = function() {
	console.log('top:\t');
	for (var i = this.items.length - 1; i >= 0; i--) {
		console.log('\t', this.items[i]);
	}
	console.log('bottom:\t');
	return '';
}

// var s = new Stack();
// s.push({'foo' : 'bar'});
// s.push({'baz' : 'buzz'});
// s.push('strrrrring');
// s.print();
// s.pop();
// s.print();

module.exports = Stack;