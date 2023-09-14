import React, { useEffect, useState } from "react";
import "./event.css";

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import { TimePicker } from '@mui/x-date-pickers/TimePicker';

function EventCreation() {
    return (

        <form className="form">
            <div className="FormEvent">
                <h1>Criar Evento</h1>
                <h2>Titulo do Evento</h2>
                <TextField className="textField" id="outlined-basic" label="Titulo do Evento" variant="outlined" />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <h2>Data do Evento</h2>
                    <DatePicker className="picker" />
                    <h2>Hora do Evento</h2>
                    <TimePicker className="picker" />
                </LocalizationProvider>
                <h2>Informações complementares sobre o evento!</h2>
                <TextField className="textField" id="outlined-basic" label="Informações do Evento" variant="outlined" />
                <Button className="button" variant="contained">Criar Evento</Button>
            </div>
        </form >
        // 

    );
}

export default EventCreation;
