const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 3000;
const SECRET = "mysecretkey";

// =========================
// Built-in Middleware
// =========================
app.use(express.json());

// =========================
// Logging Middleware
// =========================
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

app.use(logger);

// =========================
// Authentication Middleware
// =========================
const auth = (req, res, next) => {
    const token = req.headers["authorization"];

    if (!token) {
        return res.status(401).json({ message: "Access Denied (No Token)" });
    }

    try {
        const verified = jwt.verify(token, SECRET);
        req.user = verified;
        next();
    } catch (err) {
        return res.status(401).json({ message: "Invalid Token" });
    }
};

// =========================
// Routes
// =========================

// Public Route
app.get("/", (req, res) => {
    res.send("Public Route - No Auth Needed");
});

// Login Route (Generate Token)
app.post("/login", (req, res) => {
    const user = {
        id: 1,
        name: "Harman"
    };

    const token = jwt.sign(user, SECRET, { expiresIn: "1h" });

    res.json({
        message: "Login successful",
        token: token
    });
});

// Protected Route
app.get("/dashboard", auth, (req, res) => {
    res.send(`Welcome ${req.user.name}, this is your dashboard`);
});

// =========================
// Error Handling Middleware
// =========================
app.use((err, req, res, next) => {
    console.error("Error:", err.stack);
    res.status(500).json({
        message: "Internal Server Error"
    });
});

// =========================
// Start Server
// =========================
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});