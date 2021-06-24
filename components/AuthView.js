import { generalConst } from "../constants/general";
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
    if (number === generalConst.CONTINUE) {
      handleClickContinue();
      return;
    }

    if (turn === generalConst.PASSPORT) {
      setNumberDni([...numberDni, number]);
    }

    if (turn === generalConst.PASSWORD) {
      setNumberClave([...numberClave, number]);
    }

    if (number === generalConst.DELETE && turn === generalConst.PASSPORT) {
      setNumberDni([]);
      setIsContinueDisabled(true);
      setIsPadDisabled(false);

      return;
    }

    if (number === generalConst.DELETE && turn === generalConst.PASSWORD) {
      setNumberClave([]);
      setIsPadDisabled(false);
      setIsContinueDisabled(true);
      return;
    }
  };

  const handleClickContinue = () => {
    if (numberDni.length >= 7 && isPasswordInputDisabled) {
      setTurn(generalConst.PASSWORD);

      setIsContinueDisabled(true);
      setIsPasswordInputDisabled(true);

      return;
    }
  };

  const areNumberDisabled = isPadDisabled && turn === generalConst.PASSPORT;

  return (
    <KeyPad
      handleClickKey={handleClick}
      areNumberDisabled={areNumberDisabled}
      isContinueDisabled={isContinueDisabled}
    />
  );
};

export default KeyCode;
