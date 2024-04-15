import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { useState } from "react";

const App = () => {
  const [gameturns, setGameturns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  const handleSwitchActivePlayer = (rowIdx, colIdx) => {
    setGameturns((prevGameturns) => {
      let currentPlayer = "X";
      if (prevGameturns && prevGameturns.length > 0) {
        currentPlayer = prevGameturns[0].player === "X" ? "O" : currentPlayer;
      }
      const updatedGameturns = [
        { player: currentPlayer, square: { row: rowIdx, col: colIdx } },
        ...prevGameturns,
      ];
      return updatedGameturns;
    });
    setActivePlayer((prevActivePlayer) =>
      prevActivePlayer === "X" ? "O" : "X"
    );
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
