import React, { useContext } from "react";

import { CartContext } from "../../hooks/useContext/CartContext";

const Cart = () => {
  const context = useContext(CartContext);

  if (!context) {
    return null;
  }

  const { state, dispatch } = context;

  const removeFromCart = (index: number) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: index });
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {state.cartItems.map((item, index) => (
          <li key={index}>
            {item.product.name}
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
