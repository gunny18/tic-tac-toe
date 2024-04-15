import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";

const App = () => {
  const [activePlayer, setActivePlayer] = useState("X");

  const handleSwitchActivePlayer = () => {
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
      <GameBoard
        switchActive={handleSwitchActivePlayer}
        currentPlayer={activePlayer}
      />
    </main>
  );
};

export default App;
