const express = require("express");

const app = express();

function isEnoughAgeMiddleware(req, res, next) {
    const age = req.query.age;
    if (age >= 14) {
        next();
    } else {
        res.json({
            msg: "Not eligible",
        });
    }
}

app.use(isEnoughAgeMiddleware);

app.get("/ride1", (req, res) => {
    res.json({
        message: "You have successfully riden a ride 1",
    });
});

app.listen(3000);
