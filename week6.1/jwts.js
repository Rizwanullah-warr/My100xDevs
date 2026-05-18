const express = require('express');
const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;
const JWT_SECRET = "rizwanullahwarr02@gmail.com";
const DB_FILE = path.join(__dirname, 'users.json');

// Helper to load users from file
function loadUsers() {
    try {
        if (!fs.existsSync(DB_FILE)) {
            fs.writeFileSync(DB_FILE, JSON.stringify([]));
            return [];
        }
        const data = fs.readFileSync(DB_FILE, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error("Error loading users:", err);
        return [];
    }
}

// Helper to save users to file
function saveUsers(users) {
    try {
        fs.writeFileSync(DB_FILE, JSON.stringify(users, null, 2));
    } catch (err) {
        console.error("Error saving users:", err);
    }
}

app.use(express.json());

// Logger
app.use((req, res, next) => {
    console.log(`${new Date().toLocaleString()} - ${req.method} ${req.url}`);
    next();
});

// CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token");
    if (req.method === "OPTIONS") return res.sendStatus(200);
    next();
});

// Serve frontend
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

/**
 * Authentication Middleware
 */
function auth(req, res, next) {
    const token = req.headers.token;
    if (!token) return res.status(401).json({ message: "No token provided." });

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.username = decoded.username;
        next();
    } catch (err) {
        return res.status(401).json({ message: "Invalid token." });
    }
}

// SIGNUP
app.post("/signup", (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ message: "Missing fields." });

    const users = loadUsers();
    if (users.find(u => u.username === username)) {
        return res.status(400).json({ message: "User already exists." });
    }

    users.push({ username, password });
    saveUsers(users);
    
    res.status(201).json({ message: "Signed up successfully." });
});

// SIGNIN
app.post("/signin", (req, res) => {
    const { username, password } = req.body;
    const users = loadUsers();
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '2h' });
        res.json({ token });
    } else {
        res.status(403).json({ message: "Invalid credentials." });
    }
});

// ME
app.get("/me", auth, (req, res) => {
    const users = loadUsers();
    const user = users.find(u => u.username === req.username);
    if (user) {
        res.json({ username: user.username, password: user.password });
    } else {
        res.status(404).json({ message: "User not found." });
    }
});

app.listen(PORT, () => {
    console.log(`
🚀 FULLY FUNCTIONAL BACKEND
----------------------------------
🌍 Server: http://localhost:${PORT}
💾 Database: users.json (Persistent)
----------------------------------
    `);
});
