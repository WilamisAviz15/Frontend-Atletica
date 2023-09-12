import React, { useState } from "react";
import TextField from "@mui/material/TextField";

import styles from "./MembersForm.module.scss";
import { registerId } from "../../../shared/util";
import Button from "../../../components/Button";
import { MemberInterface } from "../interfaces/Member.interface";
import axios, { AxiosError } from "axios";
import { environment } from "../../../environments/environment";
import { CartToast } from "../../../components/snackbar";
import { SnackbarInterface } from "../interfaces/Snackbar.interface";

const MembersForm = () => {
  const initialForm: MemberInterface = {
    nome: "",
    username: "",
    cpf: "",
    email: "",
    telefone: "",
    endereco: "",
    senha: "",
    matricula: registerId(),
  };

  const [form, setForm] = useState<MemberInterface>(initialForm);
  const [snackbar, setSnackbar] = useState<SnackbarInterface>({ isOpen: false, message: "", severity: "success" });
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const hasEmptyFields = () => {
    return Object.values(form).some((value) => value === "");
  };

  const handleOpenSnackbar = (message: string, severity: "success" | "error" | "info" | "warning") => {
    setSnackbar({ isOpen: true, message, severity });
  };

  const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbar({ isOpen: false, message: "", severity: "success" });
  };

  const createMember = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setForm((form) => ({
      ...form,
      matricula: registerId(),
    }));

    try {
      const response = await axios.post(`${environment.api}/usuarios/`, form);
      console.log(response);
      console.log(form);
      handleOpenSnackbar("Usuário cadastro com sucesso.", "success");
    } catch (error) {
      if (error instanceof AxiosError) {
        handleOpenSnackbar(error.message, "error");
      }
    }
  };

  return (
    <>
      <h1 className={styles.h1}>Formulário para Fazer Parte da Octa </h1>
      <form className={styles.form} onSubmit={createMember}>
        <TextField fullWidth name="nome" label="Nome completo" onChange={(v) => handleInputChange(v)} />
        <TextField fullWidth name="username" label="Usuário/Apelido" onChange={(v) => handleInputChange(v)} />
        <TextField fullWidth name="cpf" label="CPF" onChange={(v) => handleInputChange(v)} />
        <TextField fullWidth name="email" label="E-mail" type="email" onChange={(v) => handleInputChange(v)} />
        <TextField fullWidth name="telefone" label="Telefone" onChange={(v) => handleInputChange(v)} />
        <TextField fullWidth name="endereco" label="Endereço" onChange={(v) => handleInputChange(v)} />
        <TextField fullWidth name="senha" label="Senha" type="password" onChange={(v) => handleInputChange(v)} />
        <Button
          customStyles={{ backgroundColor: "#7b1fa2", color: "#f3e5f5", borderStyle: "none", width: "100%" }}
          text="Finalizar cadastro"
          disabled={hasEmptyFields()}
        />
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

export default MembersForm;
