import Button from "./Button";

const INITIAL_STATE = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = () => {
  return (
    <ol className="gameboard">
      {INITIAL_STATE.map((row, rowIdx) => (
        <ol key={rowIdx}>
          {row.map((col, colIdx) => (
            <li key={colIdx}>
              <Button>{col}</Button>
            </li>
          ))}
        </ol>
      ))}
    </ol>
  );
};

export default GameBoard;
