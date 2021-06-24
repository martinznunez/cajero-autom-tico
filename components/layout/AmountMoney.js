import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../../context/UserContext";
import { generalConst, TypeOfOperationConst } from "../../constants/general";
import Title from "../Title";
import KeyPad from "../KeyPad";
import axios from "axios";
import Swal from "sweetalert2";

const AmountMoney = () => {
  const router = useRouter();
  const { clientInfo, setClientInfo, setTypeToOperation } =
    useContext(UserContext);
  const [isContinueDisabled, setIsContinueDisabled] = useState(true);

  const [padNumber, setPadNumber] = useState([]);

  const updateClient = async (newAmount) => {
    const url = `/api/balance/${clientInfo.id}`;

    try {
      const response = await axios.patch(url, {
        data: {
          typeOfOperation: TypeOfOperationConst.WITHDRAW,
          amount: newAmount.join(""),
        },
      });

      if (response.data) {
        setClientInfo(response.data);
        router.push("/operacion/exito");
        setTypeToOperation({
          typeOperation: TypeOfOperationConst.WITHDRAW,
          balance: newAmount.join(""),
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickKey = (key) => {
    setPadNumber([...padNumber, key]);

    setIsContinueDisabled(false);

    if (key === generalConst.DELETE) {
      setPadNumber([]);
      setIsContinueDisabled(true);
    }

    if (key === generalConst.CONTINUE) {
      const newAmount = padNumber;

      if (newAmount.join("") <= clientInfo.saldo) {
        updateClient(newAmount);
        setPadNumber([]);
        setIsContinueDisabled(true);
      } else {
        setPadNumber([]);
        setIsContinueDisabled(true);
        Swal.fire({
          title:
            "Su saldo es insuficiente.Puede consultar su saldo,probar con otro monto o cancelar la operacion",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: `Consultar Saldo`,
          denyButtonText: `Otro monto`,
        }).then((result) => {
          if (result.isConfirmed) {
            router.push("/operacion/saldo");
          } else if (result.isDismissed) {
            router.push("/operacion/cancelar");
          } else if (result.isDenied) {
            router.push("/operacion/monto");
          }
        });
      }

      return;
    }
  };

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
        <Title title={"Otro monto"} />
      </div>
      <div className="container-operations">
        <div>
          <label>
            <p>
              <strong> {formatCurrency(padNumber.join(""))} </strong>
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
            padding-top: 0px;
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
            padding-bottom: 20px;
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
