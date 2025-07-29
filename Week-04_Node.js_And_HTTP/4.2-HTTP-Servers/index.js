const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Muskan");
});

app.listen(3000);
