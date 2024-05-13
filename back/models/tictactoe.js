const mongoose = require("mongoose");

const tictactoeSchema = new mongoose.Schema(
  {
    /**
     * Array representing tic tac toe board state
     * flattened from 3x3 grid to a 0-indexed length 9 array
     *   0 = no move
     *   1 or 2 = player 1 or 2
     */
    board: {
      type: [Number],
      required: true,
      default: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      validate: {
        validator: (val) => val.length === 9,
        message: (_) => "Board must have length 9.",
      },
    },

    /**
     * The winner of the game, if any
     *   0 for no winner, otherwise 1 or 2
     */
    winner: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
      max: 2,
    },

    /**
     * Array of moves in this game
     *   player = 1 or 2
     *   position = 0-indexed flattened position
     */
    moveHistory: [
      {
        player: {
          type: Number,
          required: true,
          min: 0,
          max: 2,
        },
        position: {
          type: Number,
          required: true,
          min: 0,
          max: 8,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("TicTacToe", tictactoeSchema);
