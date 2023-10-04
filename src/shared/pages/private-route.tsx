import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import authService from "../../pages/auth/auth.service";

const PrivateRoute = () => {
  const auth = authService.getCurrentUser();

  return auth ? <Outlet /> : <Navigate to="/auth/login" />;
};

export default PrivateRoute;
