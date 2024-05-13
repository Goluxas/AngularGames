const express = require("express");

const router = express.Router();

const { newGame, placePiece } = require("../controllers/tictactoe");

router.route("/new").get(newGame);
router.route("/:id").post(placePiece);

module.exports = router;
