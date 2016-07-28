var Queue = require('./queue');

// Our graph, nodes are indicated by number
/*
		 0
	    / \
	   /  \
	  1   2
	 /
	/
   3
*/
//So in this graph, node 0 only connects to node 1
//node 1 connects to node 0, 3
//node 3 connects to 1, 2
//node 2 connects to 3 only
// this graph is represented as:
var fourNodeGraph = [
	[1,2],	// node 0, connects to node 1 & 2
	[0,3],	// node 1, connects to node 0 & 3
	[0],  	// node 2, connects to node 0
	[1]		// node 3, connects to node 1
];

// Let's make our source node 0
// So if we do a BFS search, we should get the following:
/* 
   [
	  { distance: 0, predecessor: null},
	  { distance: 1, predecessor: 0},
	  { distance: 1, predecessor: 0},
	  { distance: 2, predecessor: 1}
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
			predecessor: null,
			explored: null
		});
	}

	// this is the root node of our graph, so it's 0
	// units away from itself
	results[sourceIndex].distance = sourceDistance;
	results[sourceIndex].explored = true;

	var q = new Queue();
	var node = graph[sourceIndex];
	q.enqueue(node);
	q.print()
	while (!q.isEmpty()) {
		sourceDistance++;
		var vert = q.dequeue();
		vert.forEach(function(node) {
			if (!results[node].explored) {
				// results[node].predecessor = 
				results[node].distance = sourceDistance;
				results[node].explored = true;
				q.enqueue(graph[node]);
			} 
		});
		q.print()
		sourceDistance++;
	}

	return results;
}

var bfs = BFS(fourNodeGraph, 0);

console.log(bfs);

