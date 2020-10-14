import React, { useState } from "react";

export default function AddPlayerForm({ addPlayerCallback }) {
  const [name, setName] = useState("");

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const addClicked = () => {
    // ADD PLAYER
    addPlayerCallback(name);
  };

  return (
    <div className="AddPlayerForm">
      <p>
        New player: <input value={name} onChange={onNameChange} />{" "}
        <button onClick={addClicked}>Add</button>
      </p>
    </div>
  );
}

//for callback props we define a function in parent (scoreboard) and mention it in children
