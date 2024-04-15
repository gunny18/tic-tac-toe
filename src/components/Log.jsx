const Log = ({ turns }) => {
  return (
    <ol>
      {turns.map((turn) => (
        <li
          key={`${turn.square.row}${turn.square.col}`}
        >{`${turn.player} at ${turn.square.row}, ${turn.square.col}`}</li>
      ))}
    </ol>
  );
};

export default Log;
