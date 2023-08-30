import React from "react";

import styles from "./Button.module.scss";

interface CustomStyles {
  [key: string]: string;
}

interface IProps {
  text: string;
  customStyles?: CustomStyles;
  onClick?: () => void;
}

const Button = ({ text, customStyles, onClick }: IProps) => {
  return (
    <button className={styles.btn} style={customStyles} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
