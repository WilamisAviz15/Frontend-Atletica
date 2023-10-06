import React, { useState } from "react";
import axios, { AxiosError } from "axios";

import InputText from "../../../components/input";
import logo from "../../../assets/logo.png";
import Button from "../../../components/button";
import styles from "./AuthRegister.module.scss";
import { AuthRegisterInterface, TField } from "../../interfaces/auth-register.interface";
import { initialForm } from "./options";
import { environment } from "../../../environments/environment";
import { SnackbarInterface } from "../../members/interfaces/Snackbar.interface";
import { CartToast } from "../../../components/snackbar";
import { errorMessages, hasEmptyFields } from "../../../shared/util";
import Loading from "../../../components/spinner";

const AuthRegister = () => {
  const [user, setUser] = useState<AuthRegisterInterface>(initialForm);
  const [snackbar, setSnackbar] = useState<SnackbarInterface>({ isOpen: false, message: "", severity: "success" });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleOpenSnackbar = (message: string, severity: "success" | "error" | "info" | "warning") => {
    setSnackbar({ isOpen: true, message, severity });
  };

  const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar({ isOpen: false, message: "", severity: "success" });
  };

  const handleInputChange = (name: TField, value: string) => {
    setUser({
      ...user,
      [name]: value,
    });
  };

  const createUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(`${environment.api}/register/`, user);
      handleOpenSnackbar("Usuário criado com sucesso.", "success");
    } catch (error: any) {
      if (error instanceof AxiosError) {
        handleOpenSnackbar(errorMessages(error.response?.data), "error");
      }
    }
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loading />}
      <form onSubmit={createUser} className={styles.register}>
        <div>
          <img src={logo} alt="logo da atletica" />
          <InputText
            type="text"
            value={user.cpf}
            placeholder="CPF"
            setValue={(value: string) => handleInputChange("cpf", value)}
          />
          <InputText
            type="text"
            value={user.nome}
            placeholder="Nome completo"
            setValue={(value: string) => handleInputChange("nome", value)}
          />
          <InputText
            type="text"
            value={user.email}
            placeholder="seuemail@dominio.com"
            setValue={(value: string) => handleInputChange("email", value)}
          />
          <InputText
            type="text"
            value={user.username}
            placeholder="Nome de usuário"
            setValue={(value: string) => handleInputChange("username", value)}
          />
          <InputText
            type="password"
            placeholder="•••••••"
            value={user.password}
            setValue={(value: string) => handleInputChange("password", value)}
          />
          <InputText
            type="text"
            value={user.telefone}
            placeholder="(XX) XXXXX-XXXX"
            setValue={(value: string) => handleInputChange("telefone", value)}
          />
          <InputText
            type="text"
            value={user.endereco}
            placeholder="Endereço"
            setValue={(value: string) => handleInputChange("endereco", value)}
          />
          <InputText
            type="text"
            value={user.matricula}
            placeholder="Matrícula"
            setValue={(value: string) => handleInputChange("matricula", value)}
          />
          <Button
            text="Criar cadastro"
            customStyles={{
              backgroundColor: "#FFEB3B",
              borderStyle: "none",
              borderRadius: "3px",
              color: "#212121",
              width: "100%",
            }}
            //TODO:  disabled={hasEmptyFields(user)}
          />
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

export default AuthRegister;
