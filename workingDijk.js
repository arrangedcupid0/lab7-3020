function dijkstra(graph, source)
{
	if(graph.length == 0)
	{
		return [];
	}
	var dists = [];
	var inf = 999999999999999999999;
	for(var i = 0; i < graph.length; i++)
	{
		dists.push(inf);
	}
	dists[source] = 0;

	var unmarked = true;
	while(unmarked)
	{
		unmarked = false
		for(var j = 0; j < dists.length; j++)
		{
			if(dists[j] == inf)
			{
				unmarked = true;
			}
		}
		if(unmarked)
		{
			var smol = inf; //which seems incredibly counterintuitive if you ask me
			var vertex;
			for(var k = 0; k < graph[source].length; k++)
			{
				if((dists[k] == inf) && (k != source))
				{
					if(smol > graph[source][k])
					{
						smol = graph[source][k];
						vertex = k;
					}
				}
			}
			dists[vertex] = smol;
			for(var l = 0; l < graph[vertex].length; l++)
			{
				dists[l] = min(dists[l], (smol + graph[vertex][l]));
			}
		}
	}
	return dists;
}

function min(first, second)
{
	if(first > second)
	{
		return second;
	}
	if(first <= second)
	{
		return first;
	}
}

function testThisBS()
{
	var graph = [];
	console.log(dijkstra(graph, 5321235));
	graph = [[ 0, 3 ],
		[ 3, 0 ]];
	console.log(dijkstra(graph, 1));
	graph = [[ 0, 2 ],
		[ 1, 0 ]];
	console.log(dijkstra(graph, 0));
	graph = [[ 0, 10, 8, 19 ],
		[ 10, 0, 9, 10 ],
		[ 8, 9, 0, 1 ],
		[ 19, 10, 1, 0 ]];
	console.log(dijkstra(graph, 3));
	graph = [[ 0, 10, 8, 19 ],
		[ 2, 0, 5, 10 ],
		[ 5, 9, 0, 1 ],
		[ 21, 2, 3, 0 ]];
	console.log(dijkstra(graph, 1));
	graph = [[ 0, 9, 21, 25, 21 ],
		[ 9, 0, 14, 20, 5 ],
		[ 21, 14, 0, 11, 8 ],
		[ 25, 20, 11, 0, 6 ],
		[ 21, 5, 8, 6, 0 ]];
	console.log(dijkstra(graph, 2));
	graph = [[ 0, 9, 21, 25, 21 ],
		[ 9, 0, 14, 3, 5 ],
		[ 10, 14, 0, 11, 8 ],
		[ 7, 8, 1, 0, 6 ],
		[ 21, 2, 8, 6, 0 ]];
	console.log(dijkstra(graph, 4));
	graph = [[ 0, 9, 17, 1, 1, 10 ],
		[ 9, 0, 14, 15, 8, 7 ],
		[ 17, 14, 0, 5, 9, 3 ],
		[ 1, 15, 5, 0, 9, 5 ],
		[ 1, 8, 9, 9, 0, 3 ],
		[ 10, 7, 3, 5, 3, 0 ]];
	console.log(dijkstra(graph, 3));

}

testThisBS();
