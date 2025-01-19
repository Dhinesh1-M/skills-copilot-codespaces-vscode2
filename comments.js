// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Simulated database for comments
let comments = [];

// Route to get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Route to add a new comment
app.post('/comments', (req, res) => {
    const { name, comment } = req.body;
    if (!name || !comment) {
        return res.status(400).json({ error: 'Name and comment are required' });
    }
    const newComment = { name, comment };
    comments.push(newComment);
    res.status(201).json(newComment);
});

// Route to delete a comment by index
app.delete('/comments/:index', (req, res) => {
    const index = parseInt(req.params.index);
    if (isNaN(index) || index < 0 || index >= comments.length) {
        return res.status(404).json({ error: 'Comment not found' });
    }
    comments.splice(index, 1);
    res.status(204).end();
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});