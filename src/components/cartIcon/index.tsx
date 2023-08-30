import React, { useContext, useEffect, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

import styles from "./CartIcon.module.scss";
import { CartContext } from "../../hooks/useContext/CartContext";

const CartIcon = () => {
  const context = useContext(CartContext);

  if (!context) {
    return null;
  }

  const { state } = context;

  return (
    <div className={styles.div}>
      <MdOutlineShoppingCart />
      <span>{state.cartItems.length}</span>
    </div>
  );
};

export default CartIcon;
