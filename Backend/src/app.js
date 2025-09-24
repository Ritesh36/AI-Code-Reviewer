const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const cors = require("cors");

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

const cors = require('cors');
app.use(cors({
  origin: 'https://ai-code-reviewer-4-7a6h.onrender.com', // <-- your frontend URL here
  methods: ['POST', 'GET'],
  credentials: true
}));

app.get("/", (req, res) => {
    res.send("Welcome to the AI API!");
});

app.use('/ai', aiRoutes);

module.exports = app;