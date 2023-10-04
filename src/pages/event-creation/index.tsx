import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import dayjs, { Dayjs } from "dayjs";
import { AxiosError } from "axios";

import { EventInterface } from "../interfaces/event.interface";
import { errorMessages, hasEmptyFields } from "../../shared/util";
import Button from "../../components/Button";
import "./event.css";
import eventService from "./event.service";
import { SnackbarInterface } from "../members/interfaces/Snackbar.interface";
import { CartToast } from "../../components/snackbar";
import { initialForm } from "./options";

function EventCreation() {
  const [form, setForm] = useState<EventInterface>(initialForm);
  const [snackbar, setSnackbar] = useState<SnackbarInterface>({ isOpen: false, message: "", severity: "success" });

  const handleOpenSnackbar = (message: string, severity: "success" | "error" | "info" | "warning") => {
    setSnackbar({ isOpen: true, message, severity });
  };

  const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar({ isOpen: false, message: "", severity: "success" });
  };

  const createEvent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await eventService.httpPost(form);
      handleOpenSnackbar("Evento criado com sucesso.", "success");
    } catch (error: any) {
      if (error instanceof AxiosError) {
        handleOpenSnackbar(error.message, "error");
      }
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  function isDayjsObject(obj: unknown): obj is Dayjs {
    return dayjs.isDayjs(obj);
  }

  const handleDateChange = (value: unknown) => {
    if (isDayjsObject(value)) {
      setForm({
        ...form,
        data: value.toDate(),
      });
    }
  };

  return (
    <>
      <h1 className="title">Criar Evento</h1>
      <form className="form" onSubmit={createEvent}>
        <div>
          <TextField
            className="textField"
            id="outlined-basic"
            label="Titulo do Evento"
            variant="outlined"
            name="nome"
            onChange={(v) => handleInputChange(v)}
          />
          <TextField
            className="textField"
            id="outlined-basic"
            label="Descrição"
            variant="outlined"
            name="descricao"
            onChange={(v) => handleInputChange(v)}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker className="picker" onChange={(v) => handleDateChange(v)} />
          </LocalizationProvider>
          <TextField
            className="textField"
            id="outlined-basic"
            label="Local"
            variant="outlined"
            name="local"
            onChange={(v) => handleInputChange(v)}
          />
          <Button
            text="Criar evento"
            customStyles={{ backgroundColor: "#7b1fa2", color: "#f3e5f5", borderStyle: "none", width: "100%" }}
            disabled={hasEmptyFields(form)}
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
}

export default EventCreation;
