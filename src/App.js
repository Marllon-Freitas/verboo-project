import { useState, createContext, useEffect } from "react";

// styles
import "./App.css";

// components
import Board from "./components/Board";
import GameOver from "./components/GameOver";
import Keyboard from "./components/Keyboard";
import { defaultBoard, generateWordSet } from "./helpers/words";

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
  const [word, setWord] = useState("");

  useEffect(() => {
    generateWordSet().then((result) => {
      setWordSet(result.wordSet);
      setWord(result.todaysWord);
      console.log(result?.todaysWord?.length);
      console.log(result?.todaysWord);
      const board = [];
      for (let i = 0; i < 6; i++) {
        const row = [];
        for (let j = 0; j < result?.todaysWord?.trim().length; j++) {
          row.push("");
        }
        board.push(row);
      }
      setBoard(board);
    });
  }, [word.length]);

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
    if (wordSet.has(`${currentWord.toLowerCase()}\r`)) {
      setCurrentAttempt({
        attempt: currentAttempt.attempt + 1,
        letterPosition: 0,
      });
    } else {
      alert("Invalid word");
    }

    if (word.toLowerCase().trim() === currentWord.toLowerCase().trim()) {
      console.log("you win");

      setGameOver({
        isGameOver: true,
        guessedTheRightWord: true,
      });
      return;
    }

    if (currentAttempt.attempt === board.length - 1) {
      setGameOver({
        isGameOver: true,
        guessedTheRightWord: false,
      });
      return;
    }
  };

  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
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
        }}
      >
        <div className="game">
          <Board />
          {gameOver.isGameOver ? <GameOver /> : <Keyboard />}
        </div>
      </GameContext.Provider>
    </div>
  );
}

export default App;
