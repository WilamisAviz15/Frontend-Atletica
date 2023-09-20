import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import Auth from "./pages/auth";
import Header from "./components/header";
import Products from "./pages/products";
import Members from "./pages/members";
import Cart from "./components/cart";
import MembersForm from "./pages/members/members-form";
import EventCreation from "./pages/event-creation";
import AuthRegister from "./pages/auth/auth-register";
import AuthLogin from "./pages/auth/auth-login";

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
      <Route
        path="/event-creation"
        element={
          <Header>
            <EventCreation />
          </Header>
        }
      ></Route>

      <Route path="/auth" element={<Auth />}>
        <Route path="login" element={<AuthLogin />} />
        <Route path="register" element={<AuthRegister />} />
      </Route>
    </Routes>
  );
}

export default App;
