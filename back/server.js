/**
 * Backend server for AngularGames
 *
 * Creating this in JavaScript rather than TypeScript as an exercise in the syntax.
 */

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const tictactoe_routes = require("./routes/tictactoe");

const TicTacToe = require("./models/tictactoe");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/tictactoe", tictactoe_routes);

app.get("/", (req, res) => {
  res.status(200).send("Back end works!");
});

app.get("/temp", async (req, res) => {
  try {
    const ttt = await TicTacToe.create({
      board: [1, 0, 0, 0, 0, 0, 0, 0, 0],
      winner: 0,
      moveHistory: [{ player: 1, position: 0 }],
    });

    res.status(200).json(ttt);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

async function start() {
  await mongoose.connect(process.env.CONNECTION_STRING);
  app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
  });
}

start();
