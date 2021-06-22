import Title from "../Title";
import InputForm from "../InputForm";

import AuthView from "../AuthView";

import { useState, useEffect, useContext } from "react";

import { UserContext } from "../../context/UserContext";

const Login = () => {
  const { setUser, setLoading, messageErrorUser } = useContext(UserContext);

  const [numberDni, setNumberDni] = useState([]);

  const [isDniInputDisabled, setIsDniInputDisabled] = useState(false);

  const [isPasswordInputDisabled, setIsPasswordInputDisabled] = useState(true);

  const [numberClave, setNumberClave] = useState([]);

  const [isContinueDisabled, setIsContinueDisabled] = useState(true);

  const [isPadDisabled, setIsPadDisabled] = useState(false);

  const [turn, setTurn] = useState("dni");

  useEffect(() => {
    if (numberClave.length === 4) {
      setUser({ numberDni, numberClave });

      setLoading(true);      

      return;
    }
  }, [numberClave, numberDni,  setUser]);

  return (
    <>
      <div className="container-title">
        <Title title={"Cajero automático Tasi"} />
        <InputForm
          setNumberDni={setNumberDni}
          numberDni={numberDni}
          setIsDniInputDisabled={setIsDniInputDisabled}
          isDniInputDisabled={isDniInputDisabled}
          numberClave={numberClave}
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
        setNumberClave={setNumberClave}
        numberClave={numberClave}
        isPasswordInputDisabled={isPasswordInputDisabled}
        setIsPasswordInputDisabled={setIsPasswordInputDisabled}
        setIsContinueDisabled={setIsContinueDisabled}
        isContinueDisabled={isContinueDisabled}
        setTurn={setTurn}
        turn={turn}
        isPadDisabled={isPadDisabled}
        setIsPadDisabled={setIsPadDisabled}
      />
      {/* <KeyCode
        setShowDisableDni={setShowDisableDni}
        setNumberDni={setNumberDni}
        numberDni={numberDni}
        setNumberClave={setNumberClave}
        numberClave={numberClave}
        showDisableDni={showDisableDni}
        showDisableClave={showDisableClave}
        setDisabledContinuar={setDisabledContinuar}
        disabledContinuar={disabledContinuar}
        setShowDisableClave={setShowDisableClave}
        setShowTurn={setShowTurn}
        showTurn={showTurn}
      /> */}

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

export default Login;
