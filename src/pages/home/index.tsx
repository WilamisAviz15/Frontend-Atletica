import React from "react";

import styles from "./Index.module.scss";
import logo from "../../assets/logo.png";
import Carousel from "../../components/carousel";

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Página inicial da Atlética Octacore </h1>
      <Carousel />
    </div>
  );
};

export default Home;
