import styles from "../styles/Home.module.css";
import { useContext } from "react";
import { UserContext } from "../UserContext";

const OperacionLayout = () => {
  const { clientInfo } = useContext(UserContext);

  return (
    <>
      <div className={styles.container_operation}>
        <div className="container-title">
          <h5> {`Bienvenido ${clientInfo.name}`} </h5>
        </div>
        <div className="container-parrafo">
          <p>¿Qué operacion deseas realizar? </p>
        </div>
        <div className="options">
          <button>Extracción</button>
          <button>Depósito</button>
          <button>Consulta de Saldo</button>
        </div>
        <button className="btn-out">Cancelar</button>
      </div>

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
            margin-top: 10%;
          }
          h5 {
            font-size: 2rem;
            color: #000;
            font-weight: 800;
          }
          button {
            margin: 10px;
            color: #f1f1f1;
            font-size: 1.3rem;
            width: 40%;
            height: 55px;
            background: dodgerblue;
            border-radius: 6px;
            transition: all 0.3s cubic-bezier(0.67, 0.17, 0.4, 0.83);
          }
          button:hover {
            cursor: pointer;
          }

          .container-parrafo {
            margin-top: 5vh;
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
            margin-right: 50%;
          

           flo
          }
        `}
      </style>
    </>
  );
};

export default OperacionLayout;
