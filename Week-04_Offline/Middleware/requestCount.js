const express = require("express");
const app = express();

let count = 0;

app.use(function requestCount(req, res, next) {
    count = count + 1;
    next();
});

app.get("/", (req, res) => {
    res.json({
        message: "Done!!!!",
    });
});

app.get("/requestCount", (req, res) => {
    res.json({
        message: `You have made ${count} requests so far`,
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
