import { generalConst } from "../constants/general";
import PropTypes from "prop-types";
import KeyPad from "./KeyPad";

const AuthView = ({
  setNumberDni,
  numberDni,
  setNumberPassword,
  numberPassword,
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

    if (turn === generalConst.DOCUMENT) {
      setNumberDni([...numberDni, number]);
    }

    if (turn === generalConst.PASSWORD) {
      setNumberPassword([...numberPassword, number]);
    }

    if (number === generalConst.DELETE && turn === generalConst.DOCUMENT) {
      setNumberDni([]);
      setIsContinueDisabled(true);
      setIsPadDisabled(false);

      return;
    }

    if (number === generalConst.DELETE && turn === generalConst.PASSWORD) {
      setNumberPassword([]);
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

  const areNumberDisabled = isPadDisabled && turn === generalConst.DOCUMENT;

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
  numberPassword: PropTypes.array,
  setNumberPassword: PropTypes.func,
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
