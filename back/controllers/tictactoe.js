const TicTacToe = require("../models/tictactoe");

/**
 * Create a new TicTacToe game and return the ID
 */
async function newGame(req, res) {
  try {
    const game = await TicTacToe.create({});
    res.status(200).json(game);
  } catch (error) {
    console.log("Failed to create new TicTacToe game");
    res.status(500).json({
      message: `Something went wrong creating new TicTacToe game:\n${error.message}`,
    });
  }
}

function _indexFromCoords(row, col) {
  return row * 3 + col;
}

function _getWinner(board) {
  for (let i = 0; i++; i < 2) {
    // Row checks
    if (
      board[i * 3] === board[i * 3 + 1] &&
      board[i * 3 + 1] === board[i * 3 + 2]
    )
      return board[i * 3];
    // Col checks
    if (board[i] === board[3 + i] && board[3 + i] === board[6 + i])
      return board[i];
  }

  // Diagonal checks
  if (board[0] === board[4] && board[4] === board[8]) return board[0];
  if (board[2] === board[4] && board[4] === board[6]) return board[2];

  return 0;
}

/**
 * Receive a move (player, row, col) and save it to the DB object
 * @param {*} req
 * @param {*} res
 */
async function placePiece(req, res) {
  try {
    const game_id = req.params.id;
    const game = await TicTacToe.findById(game_id);

    if (!game) {
      return res.status(404).json({ message: `No game with id ${id}` });
    }

    const pos = _indexFromCoords(req.body.row, req.body.col);
    const move = {
      player: req.body.player,
      position: pos,
    };

    const board = game.board;
    board[pos] = req.body.player;

    const hist = game.moveHistory;
    hist.push(move);

    const winner = _getWinner(board);

    const result = await TicTacToe.findOneAndUpdate(
      { _id: game_id },
      { board: board, winner: winner, moveHistory: hist },
      { new: true, runValidators: true }
    );

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: `Unknown error: ${error.message}` });
  }
}

module.exports = { newGame, placePiece };
