import { createContext, useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Spinner } from "./components/Spinner";
export const UserContext = createContext();
import styles from "./styles/Home.module.css";

const UserProvider = (props) => {
  const [messageErrorUser, setMessageErrorUser] = useState("");

  const [user, setUser] = useState({});

  const [loading, setLoading] = useState();

  const getUsers = useCallback(async () => {
    const client = user.numberDni.join("");

    const url = `api/users/${client}`;

    try {
      const respose = await axios.get(url);

      setTimeout(() => {
        console.log(respose.data);
        setLoading(false);
      }, 3000);
      setMessageErrorUser("");
    } catch (error) {
      setTimeout(() => {
        setMessageErrorUser(error.response.data.message);
        setLoading(false);
      }, 3000);
    }
  }, [user.numberDni]);

  useEffect(() => {
    if (user.numberDni) {
      getUsers();
    }
  }, [getUsers, user]);

  if (loading) {
    return (
      <div className={styles.spinner}>
        <Spinner />
      </div>
    );
  }

  return (
    <UserContext.Provider
      value={{
        setUser,
        user,
        setLoading,
        messageErrorUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
