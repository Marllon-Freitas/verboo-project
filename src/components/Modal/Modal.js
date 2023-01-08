import React, { useContext } from "react";
import { GameContext } from "../../App";

import {
  ModalText,
  ModalHeader,
  ModalButton,
  ModalContent,
  ModalContainer,
  Backdrop,
} from "./styled";

function Modal() {
  const { gameOver, currentAttempt, word } = useContext(GameContext);

  const handleRestartGame = () => {
    window.location.reload();
  };

  return (
    <>
      <Backdrop />
      <ModalContainer>
        <ModalContent>
          <ModalHeader>
            {gameOver.guessedTheRightWord ? "You won!" : "You lost!"}
          </ModalHeader>
          <ModalText>
            {gameOver.guessedTheRightWord
              ? `You guessed the word "${word}" in ${currentAttempt.attempt} ${
                  currentAttempt.attempt === 1 ? "attempt" : "attempts"
                }`
              : `The word was "${word}"`}
          </ModalText>
          <ModalButton onClick={() => handleRestartGame()}>
            Play again
          </ModalButton>
        </ModalContent>
      </ModalContainer>
    </>
  );
}

export default Modal;
