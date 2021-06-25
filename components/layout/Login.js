import { useState, useEffect, useContext, useCallback, useRef } from "react";
import { UserContext } from "../../context/UserContext";
import { generalConst } from "../../constants/general";
import PropTypes from "prop-types";
import Title from "../Title";
import InputForm from "../InputForm";
import AuthView from "../AuthView";

const Login = () => {
  const { setUser, messageErrorUser } = useContext(UserContext);

  const [numberDni, setNumberDni] = useState([]);

  const [isDniInputDisabled, setIsDniInputDisabled] = useState(false);

  const [isPasswordInputDisabled, setIsPasswordInputDisabled] = useState(true);

  const [numberPassword, setNumberPassword] = useState([]);

  const [isContinueDisabled, setIsContinueDisabled] = useState(true);

  const [isPadDisabled, setIsPadDisabled] = useState(false);

  const [turn, setTurn] = useState(generalConst.DOCUMENT);

  useEffect(() => {
    if (numberPassword.length === 4) {
      setUser({ numberDni, numberPassword });
    }
  }, [numberPassword, numberDni, setUser]);

  const timer = useRef();

  const clearAndInitTimeout = useCallback(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setNumberDni([]);
      setNumberPassword([]);

      setTurn(generalConst.DOCUMENT);
      setIsPadDisabled(false);
    }, 20000);
  }, []);

  useEffect(() => {
    if (numberDni.length > 0 || numberPassword.length > 0) {
      clearAndInitTimeout();
    }

    return () => clearTimeout(timer.current);
  }, [clearAndInitTimeout, numberDni.length, numberPassword.length]);

  return (
    <>
      <div className="container-title">
        <Title title={"Cajero automático Tasi"} />
        <InputForm
          setNumberDni={setNumberDni}
          numberDni={numberDni}
          setIsDniInputDisabled={setIsDniInputDisabled}
          isDniInputDisabled={isDniInputDisabled}
          numberPassword={numberPassword}
          isPasswordInputDisabled={isPasswordInputDisabled}
          setIsPasswordInputDisabled={setIsPasswordInputDisabled}
          setIsContinueDisabled={setIsContinueDisabled}
          isContinueDisabled={isContinueDisabled}
          setTurn={setTurn}
          setIsPadDisabled={setIsPadDisabled}
        />
      </div>

      {messageErrorUser && <p> {messageErrorUser} </p>}

      <AuthView
        isDniInputDisabled={isDniInputDisabled}
        setNumberDni={setNumberDni}
        numberDni={numberDni}
        setNumberPassword={setNumberPassword}
        numberPassword={numberPassword}
        isPasswordInputDisabled={isPasswordInputDisabled}
        setIsPasswordInputDisabled={setIsPasswordInputDisabled}
        setIsContinueDisabled={setIsContinueDisabled}
        isContinueDisabled={isContinueDisabled}
        setTurn={setTurn}
        turn={turn}
        isPadDisabled={isPadDisabled}
        setIsPadDisabled={setIsPadDisabled}
      />

      <style jsx>
        {`
          .container-title {
            display: flex;
            margin: auto;
            justify-content: center;
            flex-direction: column;
            margin: 10px;
            margin-bottom: 10px;
          }

          p {
            margin: auto;
            color: red;
            font-size: 2rem;
          }

          @media (min-width: 900px) {
            .container-title {
              height: 30vh;
              margin: 20px;
            }
          }
        `}
      </style>
    </>
  );
};

Login.propTypes = {
  messageErrorUser: PropTypes.string,
  setUser: PropTypes.func,
};

export default Login;
