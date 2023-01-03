import { useState, createContext, useEffect } from "react";

// styles
import "./App.css";

// components
import Board from "./components/Board";
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

  useEffect(() => {
    generateWordSet().then((result) => {
      setWordSet(result.wordSet);
    });
  }, []);

  console.log(wordSet);

  const word = "AUDIO";

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
    }
    if (wordSet.has(`${currentWord.toLowerCase()}\r`)) {
      setCurrentAttempt({
        attempt: currentAttempt.attempt + 1,
        letterPosition: 0,
      });
    } else {
      alert("Invalid word");
    }

    if (word === currentWord) {
      alert("You win");
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
        }}
      >
        <div className="game">
          <Board />
          <Keyboard />
        </div>
      </GameContext.Provider>
    </div>
  );
}

export default App;
