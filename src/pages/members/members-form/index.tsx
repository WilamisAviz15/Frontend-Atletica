import React, { useState } from "react";
import TextField from "@mui/material/TextField";

import styles from "./MembersForm.module.scss";
import { registerId } from "../../../shared/util";
import Button from "../../../components/Button";
import { MemberInterface } from "../interfaces/MemberInterface";
import axios from "axios";
import { environment } from "../../../environments/environment";

const MembersForm = () => {
  const initialForm: MemberInterface = {
    nome: "",
    username: "",
    cpf: "",
    email: "",
    telefone: "",
    endereco: "",
    senha: "",
    matricula: "",
  };

  const [form, setForm] = useState<MemberInterface>(initialForm);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const createMember = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setForm((form) => ({
      ...form,
      matricula: registerId(),
    }));
    console.log(form);

    try {
      const response = await axios.post(`${environment.api}/usuarios/`, form);
      console.log(response);
      setForm(initialForm);
    } catch (error) {
      console.error("Erro ao enviar dados do formulário:", error);
    }
  };

  return (
    <>
      <h1 className={styles.h1}>Formulário para Fazer Parte da Octa </h1>
      <form className={styles.form} onSubmit={createMember}>
        {/* <TextField
          fullWidth
          label="Matrícula"
          value={registerId()}
          disabled
          InputProps={{
            readOnly: true,
          }}
        /> */}
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
        />
      </form>
    </>
  );
};

export default MembersForm;
