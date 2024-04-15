import { useState } from "react";
import Button from "./Button";

const INITIAL_STATE = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = () => {
  const [gameboard, setGameboard] = useState(INITIAL_STATE);

  const handleUpdateGameboard = (rowIdx, colIdx) => {
    setGameboard((prevGameBorad) => {
      const updatedGameBoard = [
        ...prevGameBorad.map((innerBoard) => [...innerBoard]),
      ];
      updatedGameBoard[rowIdx][colIdx] = "X";
      return updatedGameBoard;
    });
  };
  
  return (
    <ol className="gameboard">
      {gameboard.map((row, rowIdx) => (
        <ol key={rowIdx}>
          {row.map((col, colIdx) => (
            <li key={colIdx}>
              <Button
                onClick={() => {
                  handleUpdateGameboard(rowIdx, colIdx);
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
