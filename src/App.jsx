import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

const App = () => {
  return (
    <main>
      <ol className="player-container">
        <Player name="Player 1" symbol="X" />
        <Player name="Player 2" symbol="O" />
      </ol>
      <GameBoard />
    </main>
  );
};

export default App;
