import Button from "./Button";

const INITIAL_STATE = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({ turns, selectBoardBox }) => {
  console.log(turns);
  const gameboard = INITIAL_STATE;

  for (const turn of turns) {
    const { player, square } = turn;
    const { row, col } = square;
    gameboard[row][col] = player;
  }

  console.log(gameboard);

  return (
    <ol className="gameboard">
      {gameboard.map((row, rowIdx) => (
        <ol key={rowIdx}>
          {row.map((col, colIdx) => (
            <li key={colIdx}>
              <Button
                onClick={() => {
                  selectBoardBox(rowIdx, colIdx);
                }}
              >
                {col}
              </Button>
            </li>
          ))}
        </ol>
      ))}
    </ol>
  );
};

export default GameBoard;
