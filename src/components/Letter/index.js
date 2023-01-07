import React, { useContext, useEffect } from "react";
import { GameContext } from "../../App";

import { LetterWrapper } from "./styled";

function Letter({ attemptValue, letterIndex, animationDelay }) {
  const { board, word, currentAttempt, setDisabledLetters } =
    useContext(GameContext);
  const letter = board[attemptValue][letterIndex];

  const isCorrect = word.toUpperCase()[letterIndex] === letter;

  // if the letter is not correct and it is not empty and it is in the word an is not repeated
  const almost =
    !isCorrect &&
    letter &&
    word.toUpperCase().includes(letter) &&
    !word[letterIndex].includes(letter);

  useEffect(() => {
    if (letter !== "" && !isCorrect && !almost) {
      setDisabledLetters((prev) => [...prev, letter]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentAttempt.attempt]);

  const letterState =
    currentAttempt.attempt > attemptValue &&
    (isCorrect ? "correct" : almost ? "almost" : "error");

  return (
    <LetterWrapper
      id={letterState ? letterState : undefined}
      animationDelay={animationDelay}
      letter={letter}
    >
      {letter}
    </LetterWrapper>
  );
}

export default Letter;
