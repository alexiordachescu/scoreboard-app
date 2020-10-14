import React from "react";
import "../Player/Player.scss";

export default function Player(props) {
  function onClickIncrement() {
    props.incrementScore(props.id);
  }

  const { name: score, id, resetOnePlayer } = props;

  return (
    <div>
      {" "}
      <ul>
        <li className="Player">
          <div
            className="percentage_coloring"
            style={{ width: props.score + "%" }}
          />
          <h1>
            {props.key}
            {props.name} (score: {props.score}){" "}
            <button onClick={onClickIncrement}>Add points!</button>
            <button onClick={() => resetOnePlayer(id)}>Reset</button>
          </h1>
        </li>
      </ul>
    </div>
  );
}
