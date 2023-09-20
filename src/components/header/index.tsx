import React from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";
import Button from "../Button";
import CartIcon from "../cartIcon";
import logo from "../../assets/logo.png";

const Header = ({ children }: { children: JSX.Element }) => {
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
              <Button text="Login" />
            </Link>
          </li>
        </ul>
      </header>
      {children}
    </>
  );
};

export default Header;
