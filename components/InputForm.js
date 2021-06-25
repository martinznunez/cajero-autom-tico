import { useEffect } from "react";
import PropTypes from "prop-types";
const InputForm = ({
  numberDni,
  setIsDniInputDisabled,
  isDniInputDisabled,
  numberPassword,
  isPasswordInputDisabled,
  setIsPasswordInputDisabled,
  setIsContinueDisabled,
  setIsPadDisabled,
}) => {
  useEffect(() => {
    if (numberDni.length === 7) {
      setIsContinueDisabled(false);
    }

    if (numberDni.length === 8) {
      setIsPadDisabled(true);

      return;
    }
  }, [numberDni, setIsContinueDisabled, setIsPadDisabled]);

  const handleFocusInputDni = () => {
    setIsDniInputDisabled(true);
  };

  useEffect(() => {
    if (numberPassword.length === 4) {
      setIsContinueDisabled(true);
      setIsPasswordInputDisabled(true);
      setIsDniInputDisabled(true);
    }
  }, [
    numberPassword.length,
    setIsContinueDisabled,
    setIsPasswordInputDisabled,
    setIsDniInputDisabled,
    isPasswordInputDisabled,
  ]);

  const handleFocusInputClave = () => {
    if (isDniInputDisabled) {
      setIsPasswordInputDisabled(false);
      setIsDniInputDisabled(true);
    }
  };

  return (
    <>
      <p>Ingrese DNI y Clave</p>
      <div>
        <input
          disabled={isDniInputDisabled ? true : false}
          type="text"
          defaultValue={numberDni.join("")}
          placeholder="DNI"
          onFocus={() => handleFocusInputDni()}
        />
        <input
          disabled={isPasswordInputDisabled ? true : false}
          type="text"
          placeholder="Clave"
          defaultValue={numberPassword.join("")}
          onFocus={() => handleFocusInputClave()}
        />
      </div>

      <style jsx>
        {`
          div {
            align-items: center;
            width: 100%;
            display: flex;
          }
          input {
            color: #f8cf61;
            font-weight: 900;
            padding: 10px;
            margin: 5px;
            width: 130px;
            margin-top: 10px;
            border-color: #eee;
            border-width: 1px;

            font-size: 1.2rem;
          }

          p {
            font-weight: 600;
            font-size: 1rem;
          }

          @media (min-width: 900px) {
            input {
              width: 280px;
              font-size: 1.2rem;
              border: 2px solid;
              border-color: #eee;
              border-width: 1px;
            }
            div {
              display: flex;
              justify-content: center;
              padding-top: 40px;
              margin-top: 30px;
              height: 20vh;
            }

            p {
              margin-top: 30px;
              font-size: 1.7rem;
            }
          }
        `}
      </style>
    </>
  );
};

InputForm.propTypes = {
  numberDni: PropTypes.array,
  setIsDniInputDisabled: PropTypes.func,
  isDniInputDisabled: PropTypes.bool,
  isPasswordInputDisabled: PropTypes.bool,
  setIsPasswordInputDisabled: PropTypes.func,
  numberPassword: PropTypes.array,
  setIsContinueDisabled: PropTypes.func,
  setIsPadDisabled: PropTypes.func,
};
export default InputForm;
