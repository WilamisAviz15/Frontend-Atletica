import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

import styles from "./AuthLogin.module.scss";
import InputText from "../../../components/input";
import { AuthInterface } from "../../interfaces/auth-login.interface";
import Button from "../../../components/button";
import logo from "../../../assets/logo.png";
import { AxiosError } from "axios";
import authService from "../auth.service";
import { errorMessages } from "../../../shared/util";
import { SnackbarInterface } from "../../members/interfaces/Snackbar.interface";
import { CartToast } from "../../../components/snackbar";
import Loading from "../../../components/spinner";

const AuthLogin = () => {
  const [user, setUser] = useState<AuthInterface>({ username: "", password: "" });
  const [snackbar, setSnackbar] = useState<SnackbarInterface>({ isOpen: false, message: "", severity: "success" });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleOpenSnackbar = (message: string, severity: "success" | "error" | "info" | "warning") => {
    setSnackbar({ isOpen: true, message, severity });
  };

  const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar({ isOpen: false, message: "", severity: "success" });
  };

  const handleSetUsername = (value: string) => {
    setUser((currentUser) => ({
      username: value,
      password: currentUser.password,
    }));
  };

  const handleSetPassword = (value: string) => {
    setUser((currentUser) => ({
      username: currentUser.username,
      password: value,
    }));
  };

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await authService.httpPost(user);
      authService.setTokenToStorage(res.token);
      handleOpenSnackbar("Login bem sucedido.", "success");
      navigate("/");
    } catch (error: any) {
      if (error instanceof AxiosError) {
        console.log(error);
        handleOpenSnackbar(error.message, "error");
      }
    }
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loading />}
      <form onSubmit={login} className={styles.login}>
        <div>
          <img src={logo} alt="logo da atletica" />
          <InputText
            type="text"
            value={user.username}
            placeholder="seuemail@dominio.com"
            setValue={(username: string) => handleSetUsername(username)}
          />
          <InputText
            type="password"
            placeholder="•••••••"
            value={user.password}
            setValue={(password: string) => handleSetPassword(password)}
          />
          <Button
            text="Entrar"
            customStyles={{
              backgroundColor: "#FFEB3B",
              borderStyle: "none",
              borderRadius: "3px",
              color: "#212121",
              width: "100%",
            }}
            //TODO:  disabled={hasEmptyFields(user)}
          />
          <div className={styles.register}>
            <hr />
            <Link to="/auth/register">Cadastre-se</Link>
            <Outlet />
          </div>
        </div>
      </form>
      <CartToast
        open={snackbar.isOpen}
        message={snackbar.message}
        handleClose={handleCloseSnackbar}
        time={10000}
        severity={snackbar.severity}
      />
    </>
  );
};

export default AuthLogin;
