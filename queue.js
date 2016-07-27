function Queue() {
	this.items = [];
}

Queue.prototype.enqueue = function(obj) {
	this.items.push(obj)
};

Queue.prototype.dequeue = function() {
	return this.items.shift()
};

Queue.prototype.isEmpty = function() {
	return this.items.length === 0;
};

Queue.prototype.print = function() {
	console.log('newest:\t');
	for (var i = this.items.length - 1; i >= 0; i--) {
		console.log('\t', this.items[i]);
	}
	console.log('oldest:\t');
	return '';
}

var q = new Queue();
q.enqueue({'foo' : 'bar'});
q.enqueue({'baz' : 'buzz'});
q.enqueue('strrrrring');
q.print();
q.dequeue();
q.print();