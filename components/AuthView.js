import { generalConst } from "../constants/general";
import PropTypes from "prop-types";
import KeyPad from "./KeyPad";

const AuthView = ({
  setNumberDni,
  numberDni,
  setNumberClave,
  numberClave,
  isPasswordInputDisabled,
  setIsPasswordInputDisabled,
  isContinueDisabled,
  setIsContinueDisabled,
  setTurn,
  turn,
  isPadDisabled,
  setIsPadDisabled,
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

AuthView.propTypes = {
  numberDni: PropTypes.array,
  setNumberDni: PropTypes.func,
  numberClave: PropTypes.array,
  setNumberClave: PropTypes.func,
  isPasswordInputDisabled: PropTypes.bool,
  setIsPasswordInputDisabled: PropTypes.func,
  isContinueDisabled: PropTypes.bool,
  setIsContinueDisabled: PropTypes.func,
  setTurn: PropTypes.func,
  isPadDisabled: PropTypes.bool,
  turn: PropTypes.string,
  setIsPadDisabled: PropTypes.func,
};

export default AuthView;
