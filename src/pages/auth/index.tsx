import React, { useState } from "react";

import styles from "./Auth.module.scss";
import InputText from "../../components/input";
import { AuthInterface } from "../interfaces/AuthInterface";
import Button from "../../components/Button";

const Auth = () => {
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
    <div className={styles.login}>
      <img src="assets/logo.png" alt="logo da atletica" />
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
      <Button text="Entrar" />
    </div>
  );
};

export default Auth;
