import { useEffect, useRef } from "react";
import KeyPad from "./KeyPad";

const KeyCode = ({
  setNumberDni,
  numberDni,
  setNumberClave,
  numberClave,
  isPasswordInputDisabled,
  setIsPasswordInputDisabled,
  isContinueDisabled,
  setIsContinueDisabled,
  setTurn,
  isPadDisabled,
  setIsPadDisabled,
  turn,
}) => {
  const handleClick = (number) => {
    if (number === "Continuar") {
      handleClickContinuar();
      return;
    }

    if (turn === "dni") {
      setNumberDni([...numberDni, number]);
    }

    if (turn === "clave") {
      setNumberClave([...numberClave, number]);
    }

    if (number === "Borrar" && turn === "dni") {
      setNumberDni([]);
      setIsContinueDisabled(true);
      setIsPadDisabled(false);

      return;
    }

    if (number === "Borrar" && turn === "clave") {
      setNumberClave([]);
      setIsPadDisabled(false);
      setIsContinueDisabled(true);
      return;
    }
  };

  const handleClickContinuar = () => {
    if (numberDni.length >= 7 && isPasswordInputDisabled) {
      setTurn("clave");

      setIsContinueDisabled(true);
      setIsPasswordInputDisabled(true);

      return;
    }
  };

  const areNumberDisabled = isPadDisabled && turn === "dni";

  return (
    <KeyPad
      handleClickKey={handleClick}
      areNumberDisabled={areNumberDisabled}
      isContinueDisabled={isContinueDisabled}
    />
  );
};

export default KeyCode;
