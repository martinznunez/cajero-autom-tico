import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../../context/UserContext";
import { generalConst, TypeOfOperationConst } from "../../constants/general";
import KeyPad from "../KeyPad";
import Title from "../Title";
import DepositAmount from "../DepositAmount";
import axios from "axios";
import Swal from "sweetalert2";

const inputsMap = {
  oneHundred: 100,
  twoHundred: 200,
  fiveHundred: 500,
  oneThousand: 1000,
};

const Deposit = () => {
  const { clientInfo, setClientInfo, setTypeToOperation } =
    useContext(UserContext);
  const router = useRouter();

  const [isContinueDisabled, setIsContinueDisabled] = useState(true);

  const [messageError, setMessageError] = useState(false);

  const [totalToDeposit, setTotalToDeposit] = useState(0);

  const [inputsValues, setInputsValues] = useState({
    oneHundred: 0,
    twoHundred: 0,
    fiveHundred: 0,
    oneThousand: 0,
  });

  const [activeInput, setActiveInput] = useState("");

  const updateClient = async () => {
    const url = `/api/balance/${clientInfo.id}`;

    try {
      const response = await axios.patch(url, {
        data: {
          typeOfOperation: TypeOfOperationConst.DEPOSIT,
          amount: totalToDeposit,
        },
      });

      if (response.data) {
        setClientInfo(response.data);
        router.push("/operacion/exito");
        setTypeToOperation({
          typeOperation: TypeOfOperationConst.DEPOSIT,
          balance: totalToDeposit,
        });
      }
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const handleClickKey = (key) => {
    if (!activeInput) {
      return;
    }

    if (key === generalConst.CONTINUE) {
      updateClient();
      return;
    }

    if (key === generalConst.DELETE) {
      const valueToDiscount =
        inputsValues[activeInput] * inputsMap[activeInput];

      setTotalToDeposit((prevState) => (prevState -= valueToDiscount));
      setInputsValues((prevState) => ({ ...prevState, [activeInput]: 0 }));

      return;
    }

    if (key >= 5) {
      setMessageError(true);
      return;
    }
    setMessageError("");

    const valueToSum = inputsMap[activeInput] * Number(key);

    if (inputsValues[activeInput] !== 0) {
      const prevValue = inputsValues[activeInput] * inputsMap[activeInput];
      const newValue = totalToDeposit - prevValue + valueToSum;

      setTotalToDeposit(newValue);
    } else {
      setTotalToDeposit((prevState) => (prevState += valueToSum));
    }
    setIsContinueDisabled(false);
    setInputsValues((prevState) => ({ ...prevState, [activeInput]: key }));
  };

  useEffect(() => {
    if (totalToDeposit === 0) {
      setIsContinueDisabled(true);
      return;
    }
  }, [totalToDeposit]);

  const formatCurrency = (value) => {
    const formatterDolar = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    const formatterPesos = formatterDolar.format(value);

    return formatterPesos;
  };

  const handlerClickCancel = () => {
    Swal.fire({
      title: "Seguro que quieres salir?",
      icon: "warning",
      showCancelButton: "#d33",
      cancelButtonColor: true,
      confirmButtonText: "Salir",
    }).then((result) => {
      if (result.isConfirmed) {
        router.push("/operacion/cancelar");
        return;
      }
    });
  };

  return (
    <>
      <div className="container-title">
        <Title title="depósito" />
        {messageError && (
          <p className="message-error"> {"No puede ser mayor a 4"} </p>
        )}
      </div>
      <div className="container-deposit">
        <div className="container-amount">
          <DepositAmount
            setActiveInput={setActiveInput}
            inputsValues={inputsValues}
          />
        </div>
        <div className="container-pad">
          <p> Monto a depositar</p>
          <strong> {formatCurrency(totalToDeposit)} </strong>
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
            margin-top: 10px;
            height: 190px;
            text-align: center;
          }
          .message-error {
            color: red;
            font-size: 1.2rem;
          }

          .container-deposit {
            width: 90%;

            margin-left: 10%;
            display: flex;
            justify-content: space-around;
            align-items: center;
          }

          .container-btn {
            display: flex;
            height: 10vh;
            padding-bottom: 20px;
            width: 90%;
            align-items: flex-end;
            justify-content: flex-start;
          }

          button {
            width: 150px;
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

          .container-pad {
            width: 90%;
            height: 500px;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
          }
          .container-pad strong {
            padding-bottom: 10px;
            font-size: 2rem;
          }
        `}
      </style>
    </>
  );
};

export default Deposit;
