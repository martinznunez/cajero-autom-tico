import { useEffect } from "react";

const Input = ({
  numberDni,
  setShowDisableDni,
  showDisableDni,
  numberClave,
  showDisableClave,
  setShowDisableClave,
  setDisabledContinuar,
  disabledContinuar,
  setNumberDni,
}) => {
  useEffect(() => {
    if (numberDni.length === 7 || numberDni.length === 8) {
      setDisabledContinuar(true);
    }

    if (numberDni.length >= 8) {
      setShowDisableDni(true);
    }
  }, [numberDni, setDisabledContinuar, setNumberDni, setShowDisableDni]);

  const handleFocusInput = (e) => {
    setShowDisableDni(false);
  };

  useEffect(() => {
    if (numberClave.length === 4) {
      setDisabledContinuar(true);
      setShowDisableClave(true);
      setShowDisableDni(true);
    }
  }, [
    numberClave.length,
    setDisabledContinuar,
    setShowDisableClave,
    setShowDisableDni,
    showDisableClave,
  ]);

  const handleFocusInputClave = () => {
    if (showDisableDni) {
      setShowDisableClave(false);
      setShowDisableDni(true);
    }
  };

  return (
    <>
      <p>Ingrese DNI y Clave</p>
      <div>
        {disabledContinuar ? (
          <input
            disabled
            type="textarea"
            defaultValue={numberDni.join("")}
            placeholder="DNI"
          />
        ) : (
          <input
            type="textarea"
            placeholder="DNI"
            defaultValue={numberDni.join("")}
            onFocus={(e) => handleFocusInput(e)}
          />
        )}

        {showDisableClave ? (
          <input
            type="textarea"
            defaultValue={numberClave.join("")}
            placeholder="Clave"
            disabled
          />
        ) : (
          <input
            type="textarea"
            placeholder="Clave"
            defaultValue={numberClave.join("")}
            onFocus={(e) => handleFocusInputClave(e)}
          />
        )}
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

export default Input;
