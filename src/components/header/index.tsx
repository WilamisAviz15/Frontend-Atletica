import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";
import Button from "../Button";

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
            <Link to="/membros-form">Torne-se membro</Link>
          </li>
          <li className={styles.cart}>
            <Link to="/">
              <MdOutlineShoppingCart />
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
