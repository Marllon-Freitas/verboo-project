import React, { useContext } from "react";
import { GameContext } from "../../App";
import Letter from "../Letter";

function Board() {
  const { board } = useContext(GameContext);
  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((letter, letterIndex) => {
            return (
              <Letter
                key={letterIndex}
                letterIndex={letterIndex}
                attemptValue={rowIndex}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Board;
