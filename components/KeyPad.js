import PropTypes from "prop-types";


const isNumberKey = (key) => key !== "Borrar" && key !== "Continuar";

const KeyPad = ({ handleClickKey, areNumberDisabled, isContinueDisabled }) => {
  const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, "Borrar", 0, "Continuar"];

  const checkDisabledButtons = (key) => {
    if (key === "Continuar" && isContinueDisabled) {
      return true;
    }

    return false;
  };

  const handleClick = (key) => {
    if (areNumberDisabled && isNumberKey(key)) {
      return;
    }
    if (checkDisabledButtons(key)) {
      return;
    }

    handleClickKey(key);
  };

  const getClassName = (key) => {
    if (checkDisabledButtons(key)) {
      return "btn";
    }

    if (areNumberDisabled && isNumberKey(key)) {
      return "btn";
    }

    return "btnActive";
  };

  return (
    <>
      <div className="container-keyCode">
        {arrayNumber.map((number) => (
          <div key={number} className="card-code">
            <button
              className={getClassName(number)}
              onClick={() => handleClick(number)}
            >
              {number}
            </button>
          </div>
        ))}
      </div>

      <style jsx>
        {`
          .container-keyCode {
            border: 4px solid #f1f1f1;
            padding-top: 10px;
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            max-width: 60%;
            min-width: 50%;
            max-height: 600px;
            align-items: center;
            justify-content: center;
            margin: auto;
           
          }

          .btnActive {
            width: 165px;
            border: 2px solid orange;
            margin: 5px;
            font-weight: 900;
            color: #f1f1f1;
            background-color: orange;
            padding: 15px;
            cursor: pointer;
            font-size: 1rem;
            align-items: center;
          }

          .btn {
            border: 1px solid #999999;
            background-color: #cccccc;
            color: #666666;
            cursor: no-drop;
            width: 165px;
            border: 2px solid orange;
            margin: 5px;
            font-weight: 900;
            color: #f1f1f1;
            padding: 15px;
            font-size: 1rem;
            align-items: center;
          }

          

        
          }
        `}
      </style>
    </>
  );
};

KeyPad.defaultProps = {
  isContinueDisabled: false,
  isDeleteDisabled: false,
  areNumberDisabled: false,
};

KeyPad.propTypes = {
  handleClickKey: PropTypes.func.isRequired,
  isContinueDisabled: PropTypes.bool.isRequired,
  isDeleteDisabled: PropTypes.bool.isRequired,
};
export default KeyPad;
