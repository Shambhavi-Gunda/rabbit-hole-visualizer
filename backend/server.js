const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 5000;

app.get("/related", async (req, res) => {

    const topic = req.query.topic;

    try {

        const response = await axios.get(
            `https://api.datamuse.com/words?ml=${topic}`
        );

        const related = response.data
            .slice(0,8)
            .map(word => word.word);

        res.json({
            topic: topic,
            related: related
        });

    } catch (error) {
        res.status(500).json({ error: "API failed" });
    }

});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});