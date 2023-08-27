import React from "react";

import styles from "./Button.module.scss";

const Button = ({ text }: { text: string }) => {
  return <button className={styles.btn}>{text}</button>;
};

export default Button;
