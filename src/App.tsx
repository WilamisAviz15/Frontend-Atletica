import React from "react";
import Home from "./pages/home";
import Auth from "./pages/auth";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Products from "./pages/products";
import Members from "./pages/members";

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
      <Route path="/auth" element={<Auth />}></Route>
    </Routes>
  );
}

export default App;
