import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { useState } from "react";

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
  return (
    <main>
      <ol className="player-container">
        <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} />
        <Player name="Player 2" symbol="O" isActive={activePlayer === "O"} />
      </ol>
      <GameBoard turns={gameturns} selectBoardBox={handleSwitchActivePlayer} />
      <Log turns={gameturns} />
    </main>
  );
};

export default App;
