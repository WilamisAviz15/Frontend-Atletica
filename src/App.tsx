import React from "react";
import Home from "./pages/home";
import Auth from "./pages/auth";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/auth" element={<Auth />}></Route>
    </Routes>
  );
}

export default App;
