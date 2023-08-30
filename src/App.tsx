import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import Auth from "./pages/auth";
import Header from "./components/header";
import Products from "./pages/products";
import Members from "./pages/members";
import Cart from "./components/cart";
import { CartProvider } from "./hooks/useContext/CartContext";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Header>
            <CartProvider>
              <Home />
            </CartProvider>
          </Header>
        }
      ></Route>
      <Route
        path="/produtos"
        element={
          <Header>
            <CartProvider>
              <Products />
            </CartProvider>
          </Header>
        }
      ></Route>
      <Route
        path="/membros"
        element={
          <Header>
            <CartProvider>
              <Members />
            </CartProvider>
          </Header>
        }
      ></Route>
      <Route
        path="/carrinho"
        element={
          <Header>
            <CartProvider>
              <Cart />
            </CartProvider>
          </Header>
        }
      ></Route>
      <Route path="/auth" element={<Auth />}></Route>
    </Routes>
  );
}

export default App;
