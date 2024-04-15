import Button from "./Button";

const INITIAL_STATE = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({ turns, selectBoardBox }) => {
  const gameboard = INITIAL_STATE;

  for (const turn of turns) {
    const { player, square } = turn;
    const { row, col } = square;
    gameboard[row][col] = player;
  }

  return (
    <ol className="gameboard">
      {gameboard.map((row, rowIdx) => {
        return (
          <li key={rowIdx}>
            <ol className="gameboard-row">
              {row.map((col, colIdx) => (
                <li className="boxes" key={colIdx}>
                  <Button
                    onClick={() => {
                      selectBoardBox(rowIdx, colIdx);
                    }}
                    disabled={col !== null}
                  >
                    {col}
                  </Button>
                </li>
              ))}
            </ol>
          </li>
        );
      })}
    </ol>
  );
};

export default GameBoard;
