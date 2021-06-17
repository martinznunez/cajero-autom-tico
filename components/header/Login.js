import Title from "../Title";
import Input from "../Input";
import KeyCode from "../KeyCode";
import { useState, useEffect, useContext } from "react";

import { UserContext } from "../../UserContext";

const Login = () => {
  const { setUser, setLoading, messageErrorUser } = useContext(UserContext);

  const [numberDni, setNumberDni] = useState([]);

  const [showDisableDni, setShowDisableDni] = useState(true);

  const [numberClave, setNumberClave] = useState([]);

  const [showDisableClave, setShowDisableClave] = useState(true);

  const [disabledContinuar, setDisabledContinuar] = useState(false);

  const [showTurn, setShowTurn] = useState("dni");

  useEffect(() => {
    if (numberClave.length === 4) {
      setUser({ numberDni, numberClave });

      setLoading(true);

      return;
    }
  }, [numberClave, numberDni, setLoading, setUser]);

  return (
    <>
      <div className="container-title">
        <Title title={"Cajero automático Tasi"} />
        <Input
          setNumberDni={setNumberDni}
          numberDni={numberDni}
          setShowDisableDni={setShowDisableDni}
          showDisableDni={showDisableDni}
          numberClave={numberClave}
          setShowDisableClave={setShowDisableClave}
          showDisableClave={showDisableClave}
          setDisabledContinuar={setDisabledContinuar}
          disabledContinuar={disabledContinuar}
          setShowTurn={setShowTurn}
        />
      </div>

      {messageErrorUser && <p> {messageErrorUser} </p>}

      <KeyCode
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

export default Login;
