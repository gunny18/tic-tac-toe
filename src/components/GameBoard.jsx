import Button from "./Button";

const GameBoard = ({ board, selectBoardBox }) => {
  return (
    <ol className="gameboard">
      {board.map((row, rowIdx) => {
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
