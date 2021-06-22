import OperacionLayout from "./layout/OperationLayout";
import Extraccion from "./layout/Extraccion";
import Deposit from "./layout/Deposit";
import ConsultBalance from "./layout/ConsultBalance";
import styles from "../styles/Home.module.css";
import Success from "./layout/Success";
import Cancel from "./layout/Cancel";
import AmountMoney from "./layout/AmountMoney";

const TypeOperations = ({ pathname }) => {
  return (
    <>
      <div className={styles.container_primary}>
        {pathname === "index" && <OperacionLayout />}
        {pathname === "extraccion" && <Extraccion />}
        {pathname === "deposito" && <Deposit />}
        {pathname === "saldo" && <ConsultBalance />}
        {pathname === "exito" && <Success />}
        {pathname === "cancelar" && <Cancel />}
        {pathname === "monto" && <AmountMoney />}
      </div>
    </>
  );
};

export default TypeOperations;
