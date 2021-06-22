import styles from "../../styles/Home.module.css";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Link from "next/link";
import Swal from "sweetalert2";

import { useRouter } from "next/router";

const OperacionLayout = () => {
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
        router.push("/");
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
        <Link href={`/operacion/extraccion`}>
          <a>
            <button>Extracción</button>
          </a>
        </Link>
        <Link href={`/operacion/deposito`}>
          <a>
            <button>Depósito</button>
          </a>
        </Link>
        <Link href={`/operacion/saldo`}>
          <a>
            <button>Consulta de Saldo</button>
          </a>
        </Link>
      </div>
      <button className="btn-out" onClick={handleClickOut}>
        Cancelar
      </button>

      <style jsx>
        {`
          .options {
            display: flex;
            margin: auto;
            margin-top: 5vh;
            width: 90%;
            min-height: 10vh;
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
          a {
            width: 35%;
          }
          a button {
            margin: 10px;
            color: #f1f1f1;
            font-size: 1.3rem;
            width: 100%;
            height: 55px;
            background: dodgerblue;
            border-radius: 6px;
            transition: all 0.3s cubic-bezier(0.67, 0.17, 0.4, 0.83);
          }
          button:hover {
            cursor: pointer;
          }

          .container-parrafo {
            margin-top: 2vh;
            align-items: center;
            display: flex;
            justify-content: center;
            width: 90%;
            height: auto;
            padding-top: 50px;
          }
          p {
            font-size: 1.5rem;
            color: #000;
            font-weight: 300;
          }
          .btn-out {
            color: #f1f1f1;
            background: red;
            margin-right: 75%;
            margin-bottom: 20px;
            width: 160px;
            padding: 15px;
            font-size: 1.2rem;
            border-radius: 6px;
          }
          @media (min-width: 1000px){
            .options {
            width: 70%;
          }
        }
        `}
      </style>
    </>
  );
};

export default OperacionLayout;
