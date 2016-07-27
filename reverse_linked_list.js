function Node(data, next) {
	this.data = data;
	this.next = next;
}

function SinglyLinkedList() {
	this.nodes = [];
	this.length = 0;
}

SinglyLinkedList.prototype.add = function(data) {
	var node = new Node(data);
	if (this.length === 0) {
		this.nodes.push(node);
		this.length++
		return;
	} else {
		var currentNode = this.nodes[0];
		while (currentNode.next) {
			currentNode = currentNode.next		
		}
		currentNode.next = node;
		this.length++;
	}
};

SinglyLinkedList.prototype.print = function() {
	if (this.length === 0) {
		console.log('list is empty');
		return;
	} 
	var currentNode = this.nodes[0];
	console.log('|-HEAD')
	while (currentNode.next) {
		console.log('\t',currentNode.data)
		console.log('\t ->')
		currentNode = currentNode.next
	}
	console.log('\t', currentNode.data);
	console.log('TAIL-|')
};

SinglyLinkedList.prototype.reverse = function() {
	var stack = [],
		currentNode = this.nodes[0];

	while(currentNode.next) {
		stack.push(currentNode);
		currentNode = currentNode.next;
	}
	stack.push(currentNode);
	this.nodes = [];
	this.length = 0;
	for (var i = 0; i < stack.length; i++) {
		stack[i].next = null;
	}
	for (var i = stack.length - 1; i >= 0; i--) {
		this.add(stack[i].data)
	}
};

var sll = new SinglyLinkedList();
sll.add('first node');
sll.add('second node');
sll.add('third node');
sll.add('fourth node');
sll.reverse();
sll.print();
sll.reverse();
sll.print();