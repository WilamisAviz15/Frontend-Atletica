import React, { useContext, useEffect, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

import styles from "./CartIcon.module.scss";
import { CartContext } from "../../hooks/useContext/CartContext";

const CartIcon = () => {
  const context = useContext(CartContext);

  const count = 0;

  useEffect(() => {
    // Lógica que você deseja executar quando o contexto (carrinho) é atualizado
    console.log("Cart updated:", context);
  }, [context]); // Dependência do useEffect é o valor do carrinho

  if (!context) {
    return null;
  }

  return (
    <div className={styles.div}>
      <MdOutlineShoppingCart />
      <span>{count}</span>
    </div>
  );
};

export default CartIcon;
