const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 5000;

// Datamuse API (fallback)
app.get("/related", async (req, res) => {
    const topic = req.query.topic;

    try {
        const response = await axios.get(
            `https://api.datamuse.com/words?ml=${topic}`
        );

        const related = response.data
            .slice(0, 8)
            .map(word => word.word);

        res.json({ topic, related });

    } catch (error) {
        res.status(500).json({ error: "Datamuse failed" });
    }
});

// Reddit API
app.get("/reddit", async (req, res) => {

    const topic = req.query.topic;

    try {

        const response = await axios.get(
            `https://www.reddit.com/search.json?q=${topic}&limit=10`
        );

        const posts = response.data.data.children;

        const related = posts.map(p => p.data.subreddit);

        res.json({
            topic,
            related: [...new Set(related)]
        });

    } catch (error) {
        res.status(500).json({ error: "Reddit failed" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});