import styles from "../../styles/Home.module.css";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

import { useRouter } from "next/router";

const Operations = () => {
  const router = useRouter();
  const { clientInfo } = useContext(UserContext);

  const handleClickOut = () => {
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
        <h5> {`Bienvenido ${clientInfo.name}`} </h5>
      </div>
      <div className="container-parrafo">
        <p>¿Qué operacion deseas realizar? </p>
      </div>
      <div className="options">
        <button onClick={() => router.push("/operacion/extraccion")}>
          Extracción
        </button>

        <button onClick={() => router.push("/operacion/deposito")}>
          Depósito
        </button>

        <button onClick={() => router.push("/operacion/saldo")}>
          Consulta de Saldo
        </button>
      </div>
      <button className="btn-out" onClick={handleClickOut}>
        Cancelar
      </button>

      <style jsx>
        {`
          .options {
            display: flex;
            margin: auto;
            margin-top: 6vh;
            width: 90%;
            min-height: 30vh;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            flex-wrap: wrap;
          }
          .container-title {
            align-items: center;
            display: flex;
            justify-content: center;
            width: 90%;
            height: auto;
            margin-top: 5%;
          }
          h5 {
            font-size: 2rem;
            color: #000;
            font-weight: 800;
          }

          button {
            width: 35%;
            margin: 10px;
            color: #f1f1f1;
            font-size: 1.3rem;
            height: 60px;
            background: dodgerblue;
            border-radius: 6px;
          }
          button:hover {
            cursor: pointer;
          }

          .container-parrafo {
            align-items: center;
            display: flex;
            justify-content: center;
            width: 90%;
            height: auto;
            padding-top: 10px;
          }
          p {
            font-size: 1.5rem;
            color: #000;
            font-weight: 300;
          }
          .btn-out {
            color: #f1f1f1;
            background: red;
            text-align: center;
            margin-right: 75%;
            margin-bottom: 20px;
            width: 160px;

            font-size: 1.4rem;
            border-radius: 6px;
          }
          @media (min-width: 1000px) {
            .options {
              width: 70%;
            }
          }
        `}
      </style>
    </>
  );
};

Operations.propTypes = {
  clientInfo: PropTypes.object,
};

export default Operations;
