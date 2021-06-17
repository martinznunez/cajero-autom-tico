const KeyCode = ({
  setNumberDni,
  numberDni,
  setNumberClave,
  numberClave,
  showDisableDni,
  showDisableClave,
  disabledContinuar,
  setDisabledContinuar,
  setShowDisableClave,
  setShowTurn,
  showTurn,
}) => {
  const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, "Borrar", 0, "Continuar"];

  const handleClick = (number) => {
    if (number === "Continuar") {
      handleClickContinuar();
      return;
    }

    if (showTurn === "dni") {
      setNumberDni([...numberDni, number]);
    }

    if (showTurn === "clave") {
      setNumberClave([...numberClave, number]);
    }

    if (number === "Borrar" && showTurn === "dni") {
      setNumberDni([]);
      setDisabledContinuar(false);
      return;
    }

    if (number === "Borrar" && showTurn === "clave") {
      setNumberClave([]);
      setDisabledContinuar(false);
      return;
    }
  };

  const handleClickContinuar = () => {
    setShowDisableClave(false);
    setDisabledContinuar(false);

    if (numberDni.length >= 7) {
      setShowTurn("clave");
    }
  };

  return (
    <>
      <div className="container-keyCode">
        {arrayNumber.map((number) => (
          <div key={number} className="card-code">
            {showDisableDni && showDisableClave ? (
              <button
                className={
                  number === "Continuar" && disabledContinuar
                    ? "btnActive"
                    : "btn"
                }
                onClick={() => handleClickContinuar(number)}
              >
                {number}
              </button>
            ) : (
              <button
                className={
                  number === "Continuar" && !disabledContinuar
                    ? "btn"
                    : "btnActive"
                }
                onClick={() => handleClick(number)}
              >
                {number}
              </button>
            )}
          </div>
        ))}
      </div>

      <style jsx>
        {`
          .container-keyCode {
            border: 4px solid #f1f1f1;
            padding-top: 10px;
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            width: 98%;
            align-items: center;
            justify-content: center;
            height: 300px;
            margin: auto;
          }

          .btnActive {
            width: 95px;
            border: 2px solid orange;
            margin: 2px;
            font-weight: 900;
            color: #f1f1f1;
            background-color: orange;
            padding: 10px;
            cursor: pointer;
            font-size: 0.8rem;
            align-items: center;
          }

          .btn {
            border: 1px solid #999999;
            background-color: #cccccc;
            color: #666666;
            cursor: no-drop;
            width: 95px;
            border: 2px solid orange;
            margin: 2px;
            font-weight: 900;
            color: #f1f1f1;
            padding: 10px;
            font-size: 0.8rem;
            align-items: center;
          }

          @media (min-width: 900px) {
            .container-keyCode {
              height: 550px;
            }
            .btnActive {
              width: 180px;
              padding: 28px;
              font-size: 1.5rem;
              margin: 10px;
            }
            .btn {
              width: 180px;
              padding: 28px;
              font-size: 1.5rem;
              margin: 10px;
            }
          }
        `}
      </style>
    </>
  );
};

export default KeyCode;
