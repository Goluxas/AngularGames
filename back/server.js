/**
 * Backend server for AngularGames
 *
 * Creating this in JavaScript rather than TypeScript as an exercise in the syntax.
 */

const express = require("express");

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.status(200).send("Back end works!");
});

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
});
