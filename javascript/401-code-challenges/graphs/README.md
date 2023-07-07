# Graph implementation

## Terminology

1. *Vertex* - A vertex, also called a "node", is a data object that can have zero or more adjacent vertices.
2. *Edge* - An edge is a connection between two nodes.
3. *Neighbor* - The neighbors of a node are its adjacent nodes, i.e., are connected via an edge.
4. *Degree* - The degree of a vertex is the number of edges connected to that vertex.

## Features

This graph implementation is represented as an adjacency list, and includes the following methods:

- add node
  - Arguments: value
  - Returns: The added node
  - Add a node to the graph
- add edge
  - Arguments: 2 nodes to be connected by the edge, weight (optional)
  - Returns: nothing
  - Adds a new edge between two nodes in the graph
  - If specified, assign a weight to the edge
  - Both nodes should already be in the Graph
- get nodes
  - Arguments: none
  - Returns all of the nodes in the graph as a collection (set, list, or similar)
  - Empty collection returned if there are no nodes
- get neighbors
  - Arguments: node
  - Returns a collection of edges connected to the given node
    - Include the weight of the connection in the returned collection
  - Empty collection returned if there are no nodes
- size
  - Arguments: none
  - Returns the total number of nodes in the graph
  - 0 if there are none
- breadthFirst
  - Arguments: root, callback
  - Returns nothing
  - Callback will mutate or log the data separately.

## Tests will prove the following functionality:

1. Node can be successfully added to the graph
2. An edge can be successfully added to the graph
3. A collection of all nodes can be properly retrieved from the graph
4. All appropriate neighbors can be retrieved from the graph
5. Neighbors are returned with the weight between nodes included
6. The proper size is returned, representing the number of nodes in the graph
7. A graph with only one node and edge can be properly returned
