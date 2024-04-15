import Button from "./Button";

const GameOver = ({ winner, onRestart }) => {
  return (
    <div>
      <h2>Game Over!!</h2>
      {winner && <p>{winner} Won!!</p>}
      {!winner && <p>Its a draw</p>}
      <Button onClick={onRestart}>Restart Game</Button>
    </div>
  );
};

export default GameOver;
