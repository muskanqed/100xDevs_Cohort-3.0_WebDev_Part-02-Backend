const express = require("express");
const app = express();
app.use(express.json());

const users = [
  {
    firstName: "John",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.get("/", (req, res) => {
  const johnKidneys = users[0].kidneys;
  let numberofhealthyKidneys = 0;
  for (let i = 0; i < johnKidneys.length; i++) {
    if (johnKidneys[i].healthy) {
      numberofhealthyKidneys = numberofhealthyKidneys + 1;
    }
  }
  const numberofUnhealthyKidneys = johnKidneys.length - numberofhealthyKidneys;

  res.json({
    totalKidneys: johnKidneys.length,
    numberofhealthyKidneys,
    numberofUnhealthyKidneys,
  });
});

app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;

  users[0].kidneys.push({
    healthy: isHealthy,
  });

  res.json({
    msg: "Done!",
  });
});

app.put("/", (req, res) => {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }

  res.json({});
});

app.delete("/", (req, res) => {
  const johnKidneys = users[0].kidneys;
  if (
    johnKidneys.length > 0 &&
    johnKidneys[johnKidneys.length - 1].healthy === false
  ) {
    johnKidneys.pop();
    res.json({ msg: "Unhealthy kidney removed." });
  } else {
    res.status(411).json({ msg: "No unhealthy kidney found." });
  }
});

app.listen(3000);
