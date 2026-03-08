const express = require("express");
const app = express();

// Add this route for the root path
app.get("/", function(req, res) {
    res.send(`
        <h1>Calculator API</h1>
        <p>Available endpoints:</p>
        <ul>
            <li>/sum?a=5&b=3</li>
            <li>/multiply?a=5&b=3</li>
            <li>/divide?a=10&b=2</li>
            <li>/subtract?a=10&b=3</li>
        </ul>
    `);
});

// Your existing routes...
app.get("/sum", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({ ans: a + b });
});

app.get("/multiply", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({ ans: a * b });
});

app.get("/divide", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({ ans: a / b });
});

app.get("/subtract", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({ ans: a - b });
});

app.listen(3000);