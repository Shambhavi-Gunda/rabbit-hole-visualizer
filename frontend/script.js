let nodes = [];
let links = [];

const Graph = ForceGraph3D()
(document.getElementById('graph'))
.nodeAutoColorBy('group')
.nodeLabel('id')
.nodeRelSize(8)
.linkDirectionalParticles(2)
.linkDirectionalParticleSpeed(0.005);

async function startSearch(){

const topic = document.getElementById("topicInput").value;

const response = await fetch(
`http://localhost:5000/related?topic=${topic}`
);

const data = await response.json();

nodes = [{ id:data.topic, group:1 }];
links = [];

data.related.forEach(word => {

nodes.push({
id:word,
group:2
});

links.push({
source:data.topic,
target:word
});

});

updateGraph();

}

function updateGraph(){

Graph.graphData({
nodes:nodes,
links:links
});

}

Graph.onNodeClick(async node => {

const response = await fetch(
`http://localhost:5000/related?topic=${node.id}`
);

const data = await response.json();

data.related.forEach(word=>{

const exists = nodes.find(n=>n.id===word);

if(!exists){

nodes.push({
id:word,
group:3
});

links.push({
source:node.id,
target:word
});

}

});

updateGraph();

});