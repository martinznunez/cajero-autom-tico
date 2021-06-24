import Head from "next/head";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "../components/layout/Login";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cajero Automático</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className={styles.sectionLogin}>
        <Login />
      </div>
    </div>
  );
}
