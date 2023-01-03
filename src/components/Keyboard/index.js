import React, { useEffect, useCallback, useContext } from "react";
import { GameContext } from "../../App";
import Key from "../Keys";

function Keyboard() {
  const { onSelectLetter, onDeleteLetter, onEnterLetter } =
    useContext(GameContext);
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const handleKeyBoard = useCallback(
    (e) => {
      if (e.key === "Enter") {
        onEnterLetter();
      } else if (e.key === "Backspace") {
        onDeleteLetter();
      } else {
        keys1.forEach((key) => {
          if (e.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        keys2.forEach((key) => {
          if (e.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        keys3.forEach((key) => {
          if (e.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
      }
    },
    [keys1, keys2, keys3, onDeleteLetter, onEnterLetter, onSelectLetter]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyBoard);
    return () => {
      window.removeEventListener("keydown", handleKeyBoard);
    };
  }, [handleKeyBoard]);

  return (
    <div className="keyboard" onKeyDown={handleKeyBoard}>
      <div className="line1">
        {keys1.map((key) => (
          <Key keyValue={key} />
        ))}
      </div>
      <div className="line2">
        {keys2.map((key) => (
          <Key keyValue={key} />
        ))}
      </div>
      <div className="line3">
        <Key keyValue="ENTER" isBigKey={true} />
        {keys3.map((key) => (
          <Key keyValue={key} />
        ))}
        <Key keyValue="DELETE" isBigKey={true} />
      </div>
    </div>
  );
}

export default Keyboard;
