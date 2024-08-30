const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const cors = require("cors");
const totalScrabbleScore = require("./utils/scrabbleScoreLogic");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get("/api/greeting", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ greeting: `Hello World!` }));
});

app.get("/api/scrabble-score", (req, res) => {
  const word = req.query.word;
  const score = totalScrabbleScore(word);
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ score: score }));
});

app.listen(3001, () =>
  console.log("Express server is running on localhost:3001")
);
