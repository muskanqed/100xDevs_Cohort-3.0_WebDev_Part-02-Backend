const express = require("express");
const app = express();

let request = {}; // store requests per user

// Reset requests every 1 second
setInterval(() => {
    request = {};
}, 1000);

app.use(function rate(req, res, next) {
    const userId = req.headers["userid"];

    if (!userId) {
        return res.status(400).json({ message: "User ID required" });
    }

    if (request[userId]) {
        request[userId] = request[userId] + 1;

        if (request[userId] > 5) {
            return res.status(429).json({ message: "Too many requests - No entry" });
        } else {
            next();
        }
    } else {
        request[userId] = 1;
        next();
    }
});

app.get("/", (req, res) => {
    res.send("Welcome! You are within the request limit.");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
