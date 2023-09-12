import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import Auth from "./pages/auth";
import Header from "./components/header";
import Products from "./pages/products";
import Members from "./pages/members";
import Cart from "./components/cart";
import MembersForm from "./pages/members/members-form";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Header>
            <Home />
          </Header>
        }
      ></Route>
      <Route
        path="/produtos"
        element={
          <Header>
            <Products />
          </Header>
        }
      ></Route>
      <Route
        path="/membros"
        element={
          <Header>
            <Members />
          </Header>
        }
      ></Route>
      <Route
        path="/torne-se-membro"
        element={
          <Header>
            <MembersForm />
          </Header>
        }
      ></Route>
      <Route
        path="/carrinho"
        element={
          <Header>
            <Cart />
          </Header>
        }
      ></Route>
      <Route path="/auth" element={<Auth />}></Route>
    </Routes>
  );
}

export default App;
