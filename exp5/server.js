require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");

const app = express();
app.use(express.json());

// =======================
// MYSQL CONNECTION
// =======================
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect(err => {
    if (err) console.log(err);
    else console.log("MySQL Connected");
});

// =======================
// LOGGER MIDDLEWARE
// =======================
function logger(req, res, next) {
    console.log(`[LOG] ${req.method} ${req.url}`);
    next();
}

// =======================
// AUTH MIDDLEWARE
// =======================
function auth(req, res, next) {
    const token = req.headers.authorization;

    const sql = "SELECT * FROM users WHERE token = ?";

    db.query(sql, [token], (err, results) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Database error"
            });
        }

        if (results.length === 0) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized"
            });
        }

        req.user = results[0];
        next();
    });
}

// Apply logger globally
app.use(logger);

// =======================
// PROTECTED ROUTE
// =======================
app.get("/dashboard", auth, (req, res) => {
    res.json({
        success: true,
        message: `Welcome ${req.user.username}`
    });
});

// =======================
// ERROR MIDDLEWARE
// =======================
app.use((err, req, res, next) => {
    res.status(500).json({
        success: false,
        message: "Internal Server Error"
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});