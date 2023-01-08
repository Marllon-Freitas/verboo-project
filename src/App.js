import { useState, createContext, useEffect } from "react";

//globalStyles
import { GlobalStyles } from "./GlobalStyles";

import Loader from "./components/Loader/";

// styles
import "./App.css";

// components
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { defaultBoard, generateWordSet } from "./helpers/words";
import Modal from "./components/Modal/Modal";

export const GameContext = createContext();

function App() {
  const [board, setBoard] = useState(defaultBoard);
  const [currentAttempt, setCurrentAttempt] = useState({
    attempt: 0,
    letterPosition: 0,
  });
  const [wordSet, setWordSet] = useState(new Set());
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
    isGameOver: false,
    guessedTheRightWord: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [word, setWord] = useState("");
  const [actualBoardIndex, setActualBoardIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isToShowWrongAttemptAnimation, setIsToShowWrongAttemptAnimation] =
    useState(false);

  useEffect(() => {
    setIsLoading(true);
    generateWordSet()
      .then((result) => {
        setWordSet(result.wordSet);
        setWord(result.todaysWord);
        const board = [];
        for (let i = 0; i < 6; i++) {
          const row = [];
          for (let j = 0; j < result?.todaysWord?.trim().length; j++) {
            row.push("");
          }
          board.push(row);
        }
        setBoard(board);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const onSelectLetter = (keyValue) => {
    if (
      currentAttempt.letterPosition === board[currentAttempt.attempt].length
    ) {
      return;
    }
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition] = keyValue;
    setBoard(newBoard);
    setCurrentAttempt({
      ...currentAttempt,
      letterPosition: currentAttempt.letterPosition + 1,
    });
  };

  const onDeleteLetter = () => {
    if (currentAttempt.letterPosition === 0) return;
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition - 1] = "";
    setBoard(newBoard);
    setCurrentAttempt({
      ...currentAttempt,
      letterPosition: currentAttempt.letterPosition - 1,
    });
  };

  const onEnterLetter = () => {
    if (currentAttempt.attempt === board.length) return;
    let currentWord = "";
    for (let i = 0; i < board[currentAttempt.attempt].length; i++) {
      currentWord += board[currentAttempt.attempt][i];
      currentWord.toLowerCase();
    }
    const isValidWord =
      wordSet.has(`${currentWord.toLowerCase()}\r`) &&
      word.trim().length === currentWord.trim().length;
    if (isValidWord) {
      setCurrentAttempt({
        attempt: currentAttempt.attempt + 1,
        letterPosition: 0,
      });
      setActualBoardIndex(currentAttempt.attempt + 1);
    } else if (
      wordSet.has(`${currentWord.toLowerCase()}\r`) ||
      word.trim().length === currentWord.trim().length
    ) {
      handleWrongAttempt();
    } else {
      handleWrongAttempt();
    }

    if (word.toLowerCase().trim() === currentWord.toLowerCase().trim()) {
      handleOpenModal();
      setGameOver({
        isGameOver: true,
        guessedTheRightWord: true,
      });
      return;
    }

    if (currentAttempt.attempt === board.length - 1 && isValidWord) {
      handleOpenModal();
      setGameOver({
        isGameOver: true,
        guessedTheRightWord: false,
      });
      return;
    }
  };

  const handleWrongAttempt = () => {
    setIsToShowWrongAttemptAnimation(true);
    setTimeout(() => {
      setIsToShowWrongAttemptAnimation(false);
    }, 500);
  };

  const handleOpenModal = () => {
    setTimeout(() => {
      setShowModal(true);
    }, 1500);
  };

  return (
    <>
      <GlobalStyles />
      <div className="App">
        <nav>
          <h1>Verb.oo</h1>
        </nav>
        {isLoading ? (
          <Loader />
        ) : (
          <GameContext.Provider
            value={{
              board,
              setBoard,
              currentAttempt,
              setCurrentAttempt,
              onSelectLetter,
              onDeleteLetter,
              onEnterLetter,
              word,
              disabledLetters,
              setDisabledLetters,
              gameOver,
              setGameOver,
              actualBoardIndex,
              isToShowWrongAttemptAnimation,
            }}
          >
            <div className="game">
              <Board />
              <Keyboard />
              {showModal && <Modal setShowModal={setShowModal} />}
            </div>
          </GameContext.Provider>
        )}
      </div>
    </>
  );
}

export default App;
