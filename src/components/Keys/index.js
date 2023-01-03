import React, { useContext } from "react";
import { GameContext } from "../../App";

function Key({ keyValue, isBigKey, isDisabled }) {
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
    <div className="key" id={isBigKey ? "big" : isDisabled && "disabled"} onClick={selectLetter}>
      {" "}
      {keyValue}
    </div>
  );
}

export default Key;
