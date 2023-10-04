import React from "react";

import styles from "./Index.module.scss";
import logo from "../../assets/logo.png";

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Bem vindo </h1>
      <img src={logo} alt="logo atletica" />
    </div>
  );
};

export default Home;
