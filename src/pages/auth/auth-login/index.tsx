import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import styles from "./AuthLogin.module.scss";
import InputText from "../../../components/input";
import { AuthInterface } from "../../interfaces/auth-login.interface";
import Button from "../../../components/Button";
import logo from "../../../assets/logo.png";

const AuthLogin = () => {
  const [user, setUser] = useState<AuthInterface>({ username: "", password: "" });

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

  return (
    <form className={styles.login}>
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
  );
};

export default AuthLogin;
