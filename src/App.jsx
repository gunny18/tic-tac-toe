import Player from "./components/Player";

const App = () => {
  return (
    <main>
      <ol className="player-container">
        <Player name="Player 1" symbol="X" />
        <Player name="Player 2" symbol="O" />
      </ol>
      {/* Gameboad */}
    </main>
  );
};

export default App;
