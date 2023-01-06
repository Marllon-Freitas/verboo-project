import React, { useContext } from "react";
import { GameContext } from "../../App";
import Letter from "../Letter";

import { Row, BoardWrapper } from "./styled";

function Board() {
  const { board } = useContext(GameContext);

  return (
    <BoardWrapper>
      {board?.map((row, rowIndex) => {
        return (
          <Row key={rowIndex}>
            {row.map((letter, letterIndex) => {
              return (
                <Letter
                  animationDelay={letterIndex * 0.2}
                  key={letterIndex}
                  letterIndex={letterIndex}
                  attemptValue={rowIndex}
                />
              );
            })}
          </Row>
        );
      })}
    </BoardWrapper>
  );
}

export default Board;
