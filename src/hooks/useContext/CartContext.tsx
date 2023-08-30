import React, { createContext, useReducer, ReactNode, useState, useEffect } from "react";

import { ProductInterface } from "../../pages/interfaces/ProductInterface";

interface CartItem {
  id: number;
  product: ProductInterface;
}

interface CartState {
  cartItems: CartItem[];
}

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextType {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}

type CartAction = { type: "ADD_TO_CART"; payload: CartItem } | { type: "REMOVE_FROM_CART"; payload: number };

const CartContext = createContext<CartContextType | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case "REMOVE_FROM_CART":
      const updatedCart = [...state.cartItems];
      updatedCart.splice(action.payload, 1);
      return { ...state, cartItems: updatedCart };
    default:
      return state;
  }
};

const CartProvider = ({ children }: CartProviderProps) => {
  const initialState: CartState = {
    cartItems: [],
  };

  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    setCount(state.cartItems.length);
  }, [state.cartItems]);

  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };
