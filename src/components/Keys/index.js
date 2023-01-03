import React, { useContext } from "react";
import { GameContext } from "../../App";

function Key({ keyValue, isBigKey }) {
  const {
    onSelectLetter,
    onDeleteLetter,
    onEnterLetter,
  } = useContext(GameContext);

  const selectLetter = () => {
    if (keyValue === "ENTER") {
      onEnterLetter();
    } else if (keyValue === "DELETE") {
      onDeleteLetter();
    } else {
      onSelectLetter(keyValue);
    }
  };

  return (
    <div className="key" id={isBigKey ? "big" : ""} onClick={selectLetter}>
      {" "}
      {keyValue}
    </div>
  );
}

export default Key;
