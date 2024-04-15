import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { useState } from "react";
import { winningCombinations } from "./winningCombinations";
import GameOver from "./components/GameOver";

const INITIAL_STATE = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const getActivePlayer = (gameturns) => {
  let currentPlayer = "X";
  if (gameturns && gameturns.length > 0 && gameturns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
};

const App = () => {
  const [gameturns, setGameturns] = useState([]);

  const activePlayer = getActivePlayer(gameturns);

  // VERY VERY IMPORTANT THAT THIS KIND OF COPY IS MADE
  const gameboard = [...INITIAL_STATE.map((inner) => [...inner])];

  for (const turn of gameturns) {
    const { player, square } = turn;
    const { row, col } = square;
    gameboard[row][col] = player;
  }

  let winner;
  for (const combination of winningCombinations) {
    const firstTurn = gameboard[combination[0].row][combination[0].col];
    const secondTurn = gameboard[combination[1].row][combination[1].col];
    const thirdTurn = gameboard[combination[2].row][combination[2].col];

    if (firstTurn && firstTurn === secondTurn && firstTurn === thirdTurn) {
      winner = firstTurn;
      break;
    }
  }

  const hasDraw = gameturns.length === 9 && !winner;

  const handleSwitchActivePlayer = (rowIdx, colIdx) => {
    setGameturns((prevGameturns) => {
      const currentPlayer = getActivePlayer(prevGameturns);
      const updatedGameturns = [
        { player: currentPlayer, square: { row: rowIdx, col: colIdx } },
        ...prevGameturns,
      ];
      return updatedGameturns;
    });
  };

  function handleRematch() {
    setGameturns([]);
  }

  return (
    <main>
      <ol className="player-container">
        <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} />
        <Player name="Player 2" symbol="O" isActive={activePlayer === "O"} />
      </ol>
      {(winner || hasDraw) && (
        <GameOver winner={winner} onRestart={handleRematch} />
      )}
      <GameBoard board={gameboard} selectBoardBox={handleSwitchActivePlayer} />
      <Log turns={gameturns} />
    </main>
  );
};

export default App;
