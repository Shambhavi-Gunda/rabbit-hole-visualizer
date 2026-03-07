# 🌌 Internet Rabbit Hole Visualizer

An interactive **3D visualization tool** that allows users to explore connections between topics.
Users can enter a topic and see related concepts displayed as a **dynamic 3D network graph**.
Clicking a node expands the graph further, allowing users to dive deeper into a "rabbit hole" of ideas.

---

## 🚀 Features

* 🔍 **Topic Exploration** – Enter any topic and discover related concepts
* 🌐 **3D Graph Visualization** – Topics are displayed as a rotating, zoomable 3D network
* 🧠 **Expandable Nodes** – Click on nodes to explore deeper connections
* ⚡ **Real-time Data Fetching** – Data is retrieved dynamically from an external API
* 🎯 **Interactive Interface** – Users can rotate, zoom, and navigate the graph

---

## 🛠 Tech Stack

### Frontend

* HTML
* CSS
* JavaScript
* 3D Force Graph (3D network visualization)

### Backend

* Node.js
* Express.js

### API

* Datamuse API – used to fetch semantically related words

---

## 📂 Project Structure

```
rabbit-hole-visualizer
│
├── backend
│   └── server.js
│
├── frontend
│   ├── index.html
│   └── script.js
│
├── package.json
└── README.md
```

---

## ⚙️ How to Run the Project

### 1️⃣ Clone the Repository

```
git clone https://github.com/Shambhavi-Gunda/rabbit-hole-visualizer.git
```

### 2️⃣ Navigate to the Project

```
cd rabbit-hole-visualizer
```

### 3️⃣ Install Dependencies

```
npm install
```

### 4️⃣ Start the Backend Server

```
node backend/server.js
```

The server will start at:

```
http://localhost:5000
```

### 5️⃣ Open the Frontend

Open:

```
frontend/index.html
```

in your browser.

---

## 🧩 How It Works

1. User enters a topic.
2. The frontend sends a request to the backend server.
3. The backend calls the Datamuse API to fetch related words.
4. The backend returns the related topics.
5. The frontend visualizes them as a **3D network graph**.
6. Clicking a node fetches more related topics and expands the graph.

---

## 📸 Example

Example topic exploration:

```
AI
 ├ Machine Learning
 │   ├ Deep Learning
 │   ├ Neural Networks
 ├ Robotics
 └ Automation
```

Users can continue clicking nodes to explore deeper connections.

---

## 🎯 Future Improvements

* Add topic clustering
* Use Reddit / YouTube data for real internet rabbit holes
* Add AI-based recommendation of next topics
* Save user exploration paths

---

## 👩‍💻 Author

**Shambhavi Gunda**

GitHub:
https://github.com/Shambhavi-Gunda
