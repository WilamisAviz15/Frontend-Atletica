import React, { useContext } from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";
import Button from "../Button";
import CartIcon from "../cartIcon";
import { CartContext, CartProvider } from "../../hooks/useContext/CartContext";

const Header = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <header className={styles.header}>
        <img src="assets/logo.png" alt="logo da atlética" />
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
          <li className={styles.cart}>
            <Link to="/carrinho">
              <CartIcon />
            </Link>
          </li>
          <li>
            <Link to="/auth">
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
