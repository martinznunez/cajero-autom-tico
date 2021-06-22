import { useState } from "react";
import KeyPad from "../KeyPad";
import Title from "../Title";

import DepositAmount from "../DepositAmount";
const Deposit = () => {

    const [isContinueDisabled, setIsContinueDisabled] = useState(true);
  
    const [messageError, setMessageError]=useState('')




    const [numberPad, setNumberPad] = useState(0)


  const handleClickKey = (key) => {
    setNumberPad(key)

    if (key >=  5) {
        setMessageError('No puede ser mayor a 4')
        return
    }
    setMessageError('')



  };


  console.log(numberPad)

  return (
    <>
      <div className="container-title">
        <Title title="depósito" />
        {messageError && <p className='message-error'> {messageError} </p>}
      </div>
      <div className="container-deposit">
        <div className='container-amount'>
          <DepositAmount  numberPad={numberPad} />
        </div>
        <div className="container-pad">
          <p> Monto a depositar</p>
          <strong>$8774745</strong>
          <KeyPad   handleClickKey={handleClickKey}   isContinueDisabled={isContinueDisabled} />
        </div>
      </div>
      <div className="container-btn">
        <button>Cancelar</button>
      </div>

      <style jsx>
        {`
          .container-title {
            margin-top: 10px;
            height: 190px;
            text-align: center;
          
          }
          .message-error{
              color: red;
              font-size: 1.2rem;
          }
         
          .container-deposit {
            width: 90%;
            
            margin-left:10%;
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
          }

        
        `}
      </style>
    </>
  );
};

export default Deposit;
