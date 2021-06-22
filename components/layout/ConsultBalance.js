import { useRouter } from "next/router";

import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
const ConsultBalance = () => {
  const router = useRouter();
  const { clientInfo } = useContext(UserContext);

  const { saldo } = clientInfo;

  const formatterDolar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const formatterPesos = formatterDolar.format(saldo);

  return (
    <>
      <div className="container-saldo">
        <div>
          <h2>Su saldo es</h2>
          <p> {formatterPesos} </p>
        </div>
        <div>
          <p>¿Desea realizar otra operacion?</p>
        </div>
        <div className="container-btn">
          <button onClick={() => router.push("/operacion/index")}>SI</button>
          <button onClick={() => router.push("/")}>NO</button>
        </div>
      </div>

      <style jsx>
        {`
          .container-saldo {
            margin: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          h2 {
            font-size: 4rem;
            color: rgba(34, 34, 34, 0.75);
          }
          p {
            font-size: 2rem;
            color: #000;
            text-align: center;
          }
          .container-btn {
            width: 100%;
            display: flex;
            justify-content: space-around;
          }
          button {
             padding: 0.6rem 3rem;
             border: 0.16em solid #000;
             margin: 0 0.3em 0.3em 0;
             box-sizing: border-box;
             text-decoration: none;
             text-transform: uppercase;
             font-family: "Roboto", sans-serif;
             font-weight: 400;
            background-color: #cfa53e;
             color: #000;
             text-align: center;

             transition: all 0.15s;
          }
          button:hover {
             color: #f1f1f1;
             border-color: #cfa53e;
          }
          button:active {
             color: #f1f1f1;
             border-color: #bbbbbb;
          }
        `}
      </style>
    </>
  );
};

export default ConsultBalance;
