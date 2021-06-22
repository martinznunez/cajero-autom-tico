import { useState } from "react";
import PropTypes from "prop-types";
const DepositAmount = ( {numberPad}) => {

    const [isInputDisabled,setIsputDisabled] =useState(true)

    const [turn, setTurn] = useState(null);

    const [inputs, setInputs] = useState();
    



 




       const handlerClick=(e)=>{

            setInputs(e.target.name) 

       
        
            
        
    }


 
    
    





   


        




      
   
  return (
    <>
      <div className="container">
        <div className="container-money">
          <strong className='parrafo-pesos' >Pesos</strong>
          <p>$ 100</p>
          <p>$ 200</p>
          <p>$ 500</p>
          <p>$ 1000</p>
        </div>
        <form onClick={(e) => handlerClick(e)} className="container-inputs">
          <strong>Cantidad</strong>
          <input type="text" disabled name="position1" value='0' disabled={isInputDisabled ? true : false    } />
          <input type="text" disabled name="position2"  value='0' disabled={isInputDisabled ? true : false }  />
          <input type="text" disabled name="position3" value='0' disabled={isInputDisabled ? true : false } />
          <input type="text" disabled name="position4" value='0' disabled={isInputDisabled ? true : false } />
        </form>
      </div>

      <style jsx>
        {`
          .container {
            display: flex;
            justify-content: center;
            flex-direction: row;
            width: 100%;
            height: 400px;
            
          
           
          }
          .container-money {
            display: flex;
        
            flex-direction: column;
            width: 45%;
            align-items: center;
            justify-content: space-around;
          }
          strong {
            font-size: 1.2rem;
          
            
          }
          .parrafo-pesos{
              padding-top:4px;
          }

          p {
            font-size: 1rem;
          }
          .container-inputs {
            display: flex;
            flex-direction: column;
            width: 35%;
            padding-bottom: 10px;
            justify-content: space-around;
          }
          input {
            height: 40px;
            text-align: center;
            border: 2px solid orange;
          }
        `}
      </style>
    </>
  );
};
// KeyPad.defaultProps = {
//   isContinueDisabled: false,
//   isDeleteDisabled: false,
//   areNumberDisabled: false,
// };


export default DepositAmount;
