import React from "react";
import KeyPad from "./KeyPad";

const KeyCode = ({
  setNumberDni,
  numberDni,
  setNumberClave,
  numberClave,
  padState,
  setPadState,
}) => {
  const handleClick = (key) => {
    if (padState === "init") {
      setNumberDni([...numberDni, key]);
    }

    // if (number === "Continuar") {
    //   handleClickContinuar();
    //   return;
    // }

    //   if (number === "Continuar") {
    //     handleClickContinuar();
    //     return;
    //   }
    //   if (turn === "dni") {
    //     setNumberDni([...numberDni, number]);
    //   }
    //   if (turn === "clave") {
    //     setNumberClave([...numberClave, number]);
    //   }
    //   if (number === "Borrar" && turn === "dni") {
    //     setNumberDni([]);
    //     setIsContinueDisabled(true);
    //     setIsPadDisabled(false);
    //     return;
    //   }
    //   if (number === "Borrar" && turn === "clave") {
    //     setNumberClave([]);
    //     setIsPadDisabled(false);
    //     setIsContinueDisabled(true);
    //     return;
    //   }
  };

  const handleClickContinuar = () => {
    if (numberDni.length >= 7 && isPasswordInputDisabled) {
      setTurn("clave");

      setIsContinueDisabled(true);
      setIsPasswordInputDisabled(true);

      return;
    }
  };

  React.useEffect(() => {
    if (numberDni.length === 8 || numberDni.length === 7) {
      setPadState("dniReady");
    }
  }, [numberDni.length, numberDni, setPadState]);

  const areNumberDisabled = padState === "dniFilled";
  const isContinueDisabled = padState === "init";
  return (
    <KeyPad
      handleClickKey={handleClick}
      areNumberDisabled={areNumberDisabled}
      isContinueDisabled={isContinueDisabled}
    />
  );
};

export default KeyCode;
