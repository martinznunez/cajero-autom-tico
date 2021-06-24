import { Form, FormGroup, Label, CustomInput } from "reactstrap";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { TypeOfOperationConst } from "../../constants/general";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import Title from "../Title";
import axios from "axios";
import Swal from "sweetalert2";

const Withdraw = () => {
  const [moneySelect, setMoneySelect] = useState();
  const { clientInfo, setClientInfo, setTypeToOperation } =
    useContext(UserContext);

  const router = useRouter();

  const updateClient = async (moneySelect) => {
    const url = `/api/balance/${clientInfo.id}`;

    try {
      const response = await axios.patch(url, {
        data: {
          typeOfOperation: TypeOfOperationConst.WITHDRAW,
          amount: moneySelect,
        },
      });

      if (response.data) {
        setClientInfo(response.data);
        router.push("/operacion/exito");
        setTypeToOperation({
          typeOperation: TypeOfOperationConst.WITHDRAW,
          balance: moneySelect,
        });
      }
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const handleClickValidateMoney = () => {
    if (!moneySelect) {
      return null;
    }

    if (moneySelect === "otro monto") {
      router.push("/operacion/monto");

      return;
    }

    if (clientInfo.saldo >= moneySelect) {
      updateClient(moneySelect);
    } else {
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
  };

  const handleChangeMoney = (e) => {
    setMoneySelect(e.target.value);
  };

  const handleClickCancel = () => {
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
      <Title title={"Extracción"} />
      <Form onChange={(e) => handleChangeMoney(e)}>
        <div className="container-form">
          <div className="container-money">
            <FormGroup check inline>
              <Label check>
                <CustomInput
                  type="radio"
                  id="exampleCustomRadio"
                  name="customRadio"
                  label="  $500"
                  value="500"
                />
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <CustomInput
                  type="radio"
                  id="exampleCustomRadio2"
                  name="customRadio"
                  label="  $2.000"
                  value="2000"
                />
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <CustomInput
                  type="radio"
                  id="exampleCustomRadio3"
                  name="customRadio"
                  label="  $3.000"
                  value="3000"
                />
              </Label>
            </FormGroup>
          </div>
          <div className="container-money">
            <FormGroup check inline>
              <Label check>
                <CustomInput
                  type="radio"
                  id="exampleCustomRadio4"
                  name="customRadio"
                  label="  $5.000"
                  value="5000"
                />
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <CustomInput
                  type="radio"
                  id="exampleCustomRadio5"
                  name="customRadio"
                  label="  $6.000"
                  value="6000"
                />
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <CustomInput
                  type="radio"
                  id="exampleCustomRadio6"
                  name="customRadio"
                  label="  Otro monto"
                  value="otro monto"
                />
              </Label>
            </FormGroup>
          </div>
        </div>
      </Form>
      <div className="container-btn">
        <button onClick={handleClickCancel}>Cancelar</button>

        <button
          className={!moneySelect ? "btn-disabled" : ""}
          onClick={handleClickValidateMoney}
        >
          Continuar
        </button>
      </div>

      <style jsx>
        {`
          .container-form {
            width: 100%;
            display: flex;
            justify-content: space-around;
            margin-top: 5vh;
            display: flex;
            flex-direction: row;
          }
          .container-money {
            border: 3px solid #937e9c;
            margin: auto;
            margin-top: 3vh;
            width: 250px;
            margin: 5px;
            display: flex;
            min-height: 10vh;
            padding-left: 5px;
            display: flex;
            flex-direction: column;
            align-items: start;
            font-size: 1.4rem;
            justify-content: center;
          }

          .check {
            margin-left: 20%;
          }

          h2 {
            padding-top: 5%;
            font-size: 2rem;
            text-transform: uppercase;
            font-weight: 800;
          }

          .container-btn {
            margin-top: 30px;
            width: 100%;
            justify-content: space-around;
            display: flex;
          }
          button {
            margin: 10px;
            color: #f1f1f1;
            font-size: 1.3rem;
            width: 30%;
            height: 55px;
            background: #cfa53e;
            border-radius: 6px;
            cursor: pointer;
          }
          .btn-disabled {
            margin: 10px;
            color: #000;
            font-size: 1.3rem;
            width: 30%;
            height: 55px;
            background: #e0ecff;
            cursor: no-drop;
            border-radius: 6px;
          }
          @media (min-width: 1100px) {
            .container-money {
              width: 450px;
            }
            button {
              width: 20%;
            }
            .btn-disabled {
              width: 20%;
            }
          }
        `}
      </style>
    </>
  );
};

Withdraw.propTypes = {
  clientInfo: PropTypes.object,
  setClientInfo: PropTypes.func,
  setTypeToOperation: PropTypes.func,
};

export default Withdraw;
