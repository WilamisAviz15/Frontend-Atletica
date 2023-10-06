import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import TextField from "@mui/material/TextField";
import { MenuItem } from "@mui/material";

import styles from "./MembersForm.module.scss";
import Button from "../../../components/button";
import { MemberInterface } from "../interfaces/Member.interface";
import { environment } from "../../../environments/environment";
import { CartToast } from "../../../components/snackbar";
import { SnackbarInterface } from "../interfaces/Snackbar.interface";
import { collegePeriod, course, departments, initialForm } from "./options";
import { errorMessages, hasEmptyFields } from "../../../shared/util";

const MembersForm = () => {
  const [form, setForm] = useState<MemberInterface>(initialForm);
  const [snackbar, setSnackbar] = useState<SnackbarInterface>({ isOpen: false, message: "", severity: "success" });
  const [selectedPeriod, setSelectedPeriod] = useState<string>("");
  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const [selectedDepartment, setSelectedDepartment] = useState<string>("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    console.log(name, value);
    setForm({
      ...form,
      [name]: value,
    });
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
    setForm(form);

    try {
      const response = await axios.post(`${environment.api}/inscricao/`, form);
      console.log(response);
      console.log(form);
      handleOpenSnackbar("Solicitação enviada com sucesso.", "success");
    } catch (error: any) {
      if (error instanceof AxiosError) {
        handleOpenSnackbar(errorMessages(error.response?.data), "error");
      }
    }
  };

  const handleSelectChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    state: "period" | "course" | "department"
  ) => {
    switch (state) {
      case "period":
        setSelectedPeriod(event.target.value);
        handleInputChange(event);
        return;
      case "course":
        setSelectedCourse(event.target.value);
        handleInputChange(event);

        return;
      case "department":
        setSelectedDepartment(event.target.value);
        handleInputChange(event);

        return;
    }
  };

  return (
    <>
      <h1 className={styles.h1}>Formulário para Fazer Parte da Octa </h1>
      <form className={styles.form} onSubmit={createMember}>
        <TextField fullWidth name="nome" label="Nome completo" onChange={(v) => handleInputChange(v)} />
        <TextField fullWidth name="cpf" label="CPF" onChange={(v) => handleInputChange(v)} />
        <TextField fullWidth name="email" label="E-mail" type="email" onChange={(v) => handleInputChange(v)} />
        <TextField fullWidth name="telefone" label="Telefone" onChange={(v) => handleInputChange(v)} />
        <TextField fullWidth name="endereco" label="Endereço" onChange={(v) => handleInputChange(v)} />
        <TextField fullWidth name="matricula" label="Matricula" onChange={(v) => handleInputChange(v)} />
        <TextField
          id="curso"
          name="curso"
          fullWidth
          select
          label="Curso"
          value={selectedCourse}
          onChange={(v) => handleSelectChange(v, "course")}
        >
          {course.map((option) => (
            <MenuItem key={option} value={option?.toString()}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="periodo"
          name="periodo"
          value={selectedPeriod}
          fullWidth
          select
          label="Período"
          onChange={(v) => handleSelectChange(v, "period")}
        >
          {collegePeriod.map((option) => (
            <MenuItem key={option} value={option?.toString()}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="diretoria_desejada"
          name="diretoria_desejada"
          value={selectedDepartment}
          fullWidth
          select
          label="Diretoria desejada"
          onChange={(v) => handleSelectChange(v, "department")}
        >
          {departments.map((option) => (
            <MenuItem key={option} value={option?.toString()}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <Button
          customStyles={{ backgroundColor: "#7b1fa2", color: "#f3e5f5", borderStyle: "none", width: "100%" }}
          text="Finalizar cadastro"
          disabled={hasEmptyFields(form)}
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
