import Player from "../Player/Player";
import React, { useState } from "react";
import AddPlayer from "../AddPlayer";
import "../Scoreboard/Scoreboard.scss";

function compare_score(player_a, player_b) {
  return player_b.score - player_a.score;
}

function compare_name(player_a, player_b) {
  return player_a.name.localeCompare(player_b.name, "en", {
    ignorePunctuation: true,
  });
}

export default function Scoreboard() {
  const [players, set_players] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Alex", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);

  //  Incrementing score:

  const incrementScore = (player) => {
    const id = player;
    const new_player_array = players.map((player) => {
      if (player.id === id) {
        return {
          id: player.id,
          name: player.name,
          score: player.score + 1,
        };
      } else {
        return player;
      }
    });
    set_players(new_player_array);
  };

  //    Reset score for all:

  const resetScore = (player) => {
    const new_player_array_reset = players.map((player) => {
      if (player) {
        return {
          id: player.id,
          name: player.name,
          score: 0,
        };
      } else {
        return player;
      }
    });
    set_players(new_player_array_reset);
  };

  // Reset one player's score:

  const resetOnePlayer = (id) => {
    console.log("guy to reset", id);
    const updatedPlayers = players.map((p) =>
      p.id === id ? { ...p, score: 0 } : p
    );
    set_players(updatedPlayers);
  };

  // Sorting based on score/name:

  const [sort_by, set_sort_by] = useState("score");

  if (sort_by === "score") {
    const players_sorted = players.sort(compare_score);
  } else {
    const players_sorted = players.sort(compare_name);
  }

  const change_sorting = (event) => {
    set_sort_by(event.target.value);
  };

  const addPlayerCallback = (name) => {
    const newGuy = {
      id: players.length + 1,
      name: name,
      score: 0,
    };
    const extraPlayerArray = [...players, newGuy];
    set_players(extraPlayerArray);
  };

  return (
    <div className="Scoreboard">
      <h1 className="Title">Scoreboard</h1>
      <p>
        Sort order:
        <select onChange={change_sorting} value={sort_by}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
        <button className="ResetButton" onClick={resetScore}>
          Reset scores!
        </button>
      </p>

      {players.map((player) => {
        return (
          <div>
            <Player
              id={player.id}
              name={player.name}
              score={player.score}
              incrementScore={incrementScore}
              resetOnePlayer={resetOnePlayer}
            />
          </div>
        );
      })}
      <div>
        <AddPlayer addPlayerCallback={addPlayerCallback} />
      </div>
    </div>
  );
}
