let nodes = [];
let links = [];
let path = [];

const Graph = ForceGraph3D()
(document.getElementById('graph'))
.nodeAutoColorBy('group')
.nodeLabel('id')
.nodeRelSize(8)
.linkDirectionalParticles(2)
.linkDirectionalParticleSpeed(0.005);

// 🚀 START SEARCH
async function startSearch(){

const topic = document.getElementById("topicInput").value;

path = [topic];
updatePathUI();
updatePrediction();

// ✅ ONLY DATAMUSE (STABLE)
const response = await fetch(
`http://localhost:5000/related?topic=${topic}`
);

const data = await response.json();

console.log("DATA:", data);

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

// 🔄 UPDATE GRAPH
function updateGraph(){

Graph.graphData({
nodes:nodes,
links:links
});
}

// 🧠 NODE CLICK
Graph.onNodeClick(async node => {

path.push(node.id);
updatePathUI();
updatePrediction();

// ✅ ONLY DATAMUSE
const response = await fetch(
`http://localhost:5000/related?topic=${node.id}`
);

const data = await response.json();

console.log("DATA:", data);

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

// 📍 PATH UI
function updatePathUI(){
document.getElementById("path").innerText =
"Path: " + path.join(" → ");
}

// 🔮 PREDICTION
function predictNext(){

const last = path[path.length-1]?.toLowerCase();

if(last.includes("ai") || last.includes("intelligence"))
return "AGI → Consciousness → Ethics";

if(last.includes("beauty"))
return "Skincare → Dermatology";

if(last.includes("space"))
return "Black Holes → Multiverse";

return "Exploring deeper...";
}

// 🔮 UPDATE PREDICTION UI
function updatePrediction(){
document.getElementById("prediction").innerText =
"Prediction: " + predictNext();
}