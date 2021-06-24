import PropTypes from "prop-types";
const DepositAmount = ({ setActiveInput, inputsValues }) => {
  const handleOnFocus = (e) => {
    setActiveInput(e.target.name);
  };

  return (
    <>
      <div className="container">
        <div className="container-money">
          <strong className="parrafo-pesos">Pesos</strong>
          <p>$ 100</p>
          <p>$ 200</p>
          <p>$ 500</p>
          <p>$ 1000</p>
        </div>

        <form onFocus={(e) => handleOnFocus(e)} className="container-inputs">
          <strong>Cantidad</strong>
          <input
            type="text"
            name="oneHundred"
            value={inputsValues.oneHundred}
          />
          <input
            type="text"
            name="twoHundred"
            value={inputsValues.twoHundred}
          />
          <input
            type="text"
            name="fiveHundred"
            value={inputsValues.fiveHundred}
          />
          <input
            type="text"
            name="oneThousand"
            value={inputsValues.oneThousand}
          />
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
          .parrafo-pesos {
            padding-top: 4px;
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

DepositAmount.propTypes = {
  inputsValues: PropTypes.object,
  setActiveInput: PropTypes.func,
};

export default DepositAmount;
