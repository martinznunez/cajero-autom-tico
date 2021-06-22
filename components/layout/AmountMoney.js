import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import KeyPad from "../KeyPad";

const AmountMoney = () => {
  const router = useRouter();
  const [isContinueDisabled, setIsContinueDisabled] = useState(true);

  const [padNumber, setPadNumber] = useState([]);

  const [newAmount, setNewAmount] = useState();

  const formatterDolar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const formatterPesos = formatterDolar.format(padNumber.join(""));

  const handleClickKey = (key) => {
    setPadNumber([...padNumber, key]);

    setIsContinueDisabled(false);

    if (key === "Borrar") {
      setPadNumber([0]);
      setIsContinueDisabled(true);
    }

    if (key === "Continuar") {
      setNewAmount(padNumber);
      setPadNumber([0]);
      setIsContinueDisabled(true);

      return;
    }

    // validar saldo
  };

  const handlerClickCancel = () => {
    // mostrat modal confirmacion de cancelar

    router.push("/operacion/cancelar");
  };

  console.log(newAmount);

  return (
    <>
      <div className="container-title">
        <h2>Otro monto</h2>
      </div>
      <div className="container-operations">
        <div>
          <label>
            <p>
              <strong> {formatterPesos} </strong>
            </p>
          </label>
        </div>

        <div className="container-KeyCode">
          <KeyPad
            handleClickKey={handleClickKey}
            isContinueDisabled={isContinueDisabled}
          />
        </div>
      </div>
      <div className="container-btn">
        <button onClick={handlerClickCancel}>Cancelar</button>
      </div>

      <style jsx>
        {`
          .container-title {
            height: 20vh;
            padding-top: 40px;
          }

          .container-KeyCode {
            width: 70%;
          
          }

          .container-operations {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            margin-left: 20%;
         

          }
          strong {
            font-size: 2rem;
          }

          .container-btn {
            display: flex;
            height: 15vh;
            padding-bottom: 20px ;
            width: 90%;
            align-items: flex-end;
            justify-content: flex-start;
          }

          button {
            width: 160px;
            border: 2px solid orange;
            margin: 2px;
            font-weight: 900;
            color: #f1f1f1;
            background-color: orange;
            padding: 15px;
            cursor: pointer;
            font-size: 1rem;
            align-items: center;
          }
        `}
      </style>
    </>
  );
};

export default AmountMoney;
