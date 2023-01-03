import React, { useContext } from "react";
import { GameContext } from "../../App";

function GameOver() {
  const { gameOver, currentAttempt, word } = useContext(GameContext);

  return (
    <div className="gameOver">
      <h3>{gameOver.guessedTheRightWord ? "you win" : "you lose"}</h3>
      <h1>Correct: {word}</h1>
      {gameOver.guessedTheRightWord && (
        (<h3>You guessed in {currentAttempt.attempt} attempts</h3>)
      )}
    </div>
  );
}

export default GameOver;
