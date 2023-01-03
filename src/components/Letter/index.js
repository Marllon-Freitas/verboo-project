import React, { useContext } from "react";
import { GameContext } from "../../App";

function Letter({ attemptValue, letterIndex }) {
  const { board, word, currentAttempt } = useContext(GameContext);
  const letter = board[attemptValue][letterIndex];

  const isCorrect = word[letterIndex] === letter;
  
  // if the letter is not correct and it is not empty and it is in the word an is not repeated
  const almost = !isCorrect && letter && word.includes(letter) && !word.slice(0, letterIndex).includes(letter);
  
  const letterState =
    currentAttempt.attempt > attemptValue &&
    (isCorrect ? "correct" : almost ? "almost" : "error");

  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
}

export default Letter;
