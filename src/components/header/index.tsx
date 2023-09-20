import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";
import Button from "../Button";
import CartIcon from "../cartIcon";
import logo from "../../assets/logo.png";

const Header = ({ children }: { children: JSX.Element }) => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      setIsLogged((value) => !value);
    }
  }, []);

  const handleButton = () => {
    if (isLogged) {
      setIsLogged((value) => !value);
      localStorage.clear();
    }
  };

  return (
    <>
      <header className={styles.header}>
        <img src={logo} alt="logo da atlética" />
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/produtos">Produtos</Link>
          </li>
          <li>
            <Link to="/membros">Membros</Link>
          </li>
          <li>
            <Link to="/torne-se-membro">Torne-se membro</Link>
          </li>
          <li>
            <Link to="/event-creation">Criar Evento</Link>
          </li>
          <li className={styles.cart}>
            <Link to="/carrinho">
              <CartIcon />
            </Link>
          </li>
          <li>
            <Link to="/auth/login">
              <Button
                text={isLogged ? "Sair" : "Login"}
                customStyles={{
                  backgroundColor: "#FFEB3B",
                  borderStyle: "none",
                  borderRadius: "3px",
                  color: "#212121",
                  width: "100%",
                }}
                onClick={handleButton}
              />
            </Link>
          </li>
        </ul>
      </header>
      {children}
    </>
  );
};

export default Header;
