import React, { useContext } from "react";
import { GameContext } from "../../App";

import { KeyWrapper } from "./styled";

function Key({ keyValue, isBigKey, isDisabled }) {
  const { onSelectLetter, onDeleteLetter, onEnterLetter } =
    useContext(GameContext);

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
    <KeyWrapper
      isDisabled={isDisabled}
      isBigKey={isBigKey}
      onClick={selectLetter}
    >
      {" "}
      {keyValue}
    </KeyWrapper>
  );
}

export default Key;
