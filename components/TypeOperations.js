import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import Operations from "./layout/Operations";
import Withdraw from "./layout/Withdraw";
import Deposit from "./layout/Deposit";
import ConsultBalance from "./layout/ConsultBalance";
import styles from "../styles/Home.module.css";
import Success from "./layout/Success";
import Cancel from "./layout/Cancel";
import AmountMoney from "./layout/AmountMoney";

const TypeOperations = ({ pathname }) => {
  const { clientInfo, setLoading } = useContext(UserContext);

  const router = useRouter();

  useEffect(() => {
    if (!clientInfo.name) {
      setLoading(true);
      router.push("/");
      setTimeout(() => setLoading(false), 3000);
    }
  }, [clientInfo, router, setLoading]);

  return (
    <>
      <div className={styles.container_primary}>
        {pathname === "index" && <Operations />}
        {pathname === "extraccion" && <Withdraw />}
        {pathname === "deposito" && <Deposit />}
        {pathname === "saldo" && <ConsultBalance />}
        {pathname === "exito" && <Success />}
        {pathname === "cancelar" && <Cancel />}
        {pathname === "monto" && <AmountMoney />}
      </div>
    </>
  );
};

TypeOperations.propTypes = {
  clientInfo: PropTypes.object,
  setLoading: PropTypes.bool,
  pathname: PropTypes.string.isRequired,
};

export default TypeOperations;
