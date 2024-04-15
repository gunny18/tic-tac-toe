import Button from "./Button";

const GameOver = ({ winner }) => {
  return (
    <div>
      <h2>Game Over!!</h2>
      {winner && <p>{winner} Won!!</p>}
      {!winner && <p>Its a draw</p>}
      <Button>Restart Game</Button>
    </div>
  );
};

export default GameOver;
