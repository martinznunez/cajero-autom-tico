import { useEffect, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
const Success = () => {
  const router = useRouter();

  const { typeToOperation } = useContext(UserContext);

  useEffect(() => {
    setTimeout(() => {
      router.push("/operacion/index");
    }, 10000);
  }, [router]);

  return (
    <>
      <div>
        <p>
          Su {typeToOperation.typeOperation} de monto ${typeToOperation.balance}
          , en la cuenta Número 873092-745, fue realizado con éxito.
        </p>
      </div>

      <style jsx>
        {`
          div {
            margin: auto;
            font-size: 2.6rem;
            width: 90%;
            text-align: center;
          }
        `}
      </style>
    </>
  );
};

Success.propTypes = {
  typeToOperation: PropTypes.object,
};

export default Success;
