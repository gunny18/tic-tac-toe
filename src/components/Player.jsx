import { useState } from "react";
import Button from "./Button";

const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const handleEditPlayer = () => {
    setIsEditing((editing) => !editing);
  };

  const handleSetPlayerName = (e) => {
    setPlayerName(e.target.value);
  };

  let playerNameContent = <h2>{playerName}</h2>;
  if (isEditing) {
    playerNameContent = (
      <input
        type="text"
        value={playerName}
        onChange={(e) => handleSetPlayerName(e)}
      />
    );
  }
  return (
    <li className="player">
      {playerNameContent}
      <span className="center">{symbol}</span>
      <Button onClick={handleEditPlayer}>{isEditing ? "Save" : "Edit"}</Button>
    </li>
  );
};

export default Player;
