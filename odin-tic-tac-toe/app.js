// Approach borrows heavily from https://www.ayweb.dev/blog/building-a-house-from-the-inside-out

const gameController = (() {
  const board = gameboard;
  const players = [
    {name: "Player 1", token: "X"},
    {name: "Player 2", token: "O"}
  ];
  let activePlayer = players[0];

  const getActivePlayer = () => activePlayer;
  const toggleActivePlayer = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };
  const displayNewRound = () => {
    board.printBoard();
    console.log(`${getActivePlayer().name}'s turn.`);
  }
  const checkWinConditions () => {

  }
  const playRound = (cell) => {
    console.log(`${getActivePlayer().name} chooses cell ${cell}.`);
    board.updateCell(cell, getActivePlayer().token);
    toggleActivePlayer();
    displayNewRound();
  }

  displayNewRound();
  return {playRound, getActivePlayer};
})();

// Module for gameboard: 2D array
const gameboard = (() {
  const rows = 3;
  const columns = 3;
  const board = [];

  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[j].push(Cell());
    }
  }

  const getBoard = () => board;
  const printBoard = () => {
    console.log(board.map((row) => row.map((cell) => cell.getValue())));
  }

  return {getBoard, printBoard};
})();

// Factory for gameboard Cells, which store "" or "X" or "O"
const Cell = () => {
  let value = "";
  getValue = () => value;
  updateValue = (token) => {
    value = player;
  };
  return {getValue, updateValue};
}

const game = gameController;
