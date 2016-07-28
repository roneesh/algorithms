var Queue = require('./queue');

// Our graph, nodes are indicated by number
/*
		 0
	    / \
	   /  \
	  1   2
	 /	  \
	/	  \
   3	  4
*/
//So in this graph, node 0 only connects to node 1
//node 1 connects to node 0, 3
//node 3 connects to 1, 2
//node 2 connects to 3 only
// this graph is represented as:
var fourNodeGraph = [
	[1,2],	// node 0, connects to node 1 & 2
	[0,3],	// node 1, connects to node 0 & 3
	[0,4],  // node 2, connects to node 0 & 4
	[1],	// node 3, connects to node 1
	[2]		// node 4, connects to node 2
];

// Let's make our source node 0
// So if we do a BFS search, we should get the following:
/* 
   [
	  { distance: 0, predecessor: null},
	  { distance: 1, predecessor: 0},
	  { distance: 1, predecessor: 0},
	  { distance: 2, predecessor: 1},
	  { distance: 2, predecessor: 2}
   ]
*/

function BFS(graph, sourceIndex) {
	if (sourceIndex > graph.length - 1) {
		return 'source is not on graph!';
	}

	var results = [],
		sourceDistance = 0;

	for (var i = 0; i < graph.length; i++) {
		results.push({
			distance: null,
			predecessor: null
		});
	}

	// this is the root node of our graph, so it's 0
	// units away from itself
	results[sourceIndex].distance = sourceDistance;

	var q = new Queue();
	var node = graph[sourceIndex];
	q.enqueue(node);
	q.print()
	while (!q.isEmpty()) {
		sourceDistance++;
		var vert = q.dequeue(),
			predecessor = graph.indexOf(vert);
		vert.forEach(function(node) {
			if (results[node].distance === null) {
				results[node].distance = sourceDistance;
				results[node].predecessor = predecessor;
				q.enqueue(graph[node]);
			} 
		});
		q.print()
	}

	return results;
}

var bfs = BFS(fourNodeGraph, 4);
console.log(bfs);
