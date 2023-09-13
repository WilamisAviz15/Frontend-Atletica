import React, { useEffect, useState } from "react";

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



import { AdapterMomentHijri } from '@mui/x-date-pickers/AdapterMomentHijri';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import useTheme from '@mui/system/useTheme';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { FormControl } from "@mui/material";

function EventCreation() {
    return (
        <FormControl sx={{
            '& > :not(style)': { m: 1, backgroundColor: "#456efe", width: '99vw', flexDirection: 'column', justifyContent: "center", alignItems: "center" },
        }}>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, backgroundColor: "#c1eeea", flexDirection: 'column', justifyContent: "center", alignItems: "center" },
                }}
                noValidate
                autoComplete="off"
            >

                <p>Titulo do Evento</p>
                <TextField id="outlined-basic" label="Titulo do Evento" variant="outlined" />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <p>Data do Evento</p>
                    <DatePicker />
                    <p>Hora do Evento</p>
                    <TimePicker />
                </LocalizationProvider>
                <p>Informações complementares sobre o evento!</p>
                <TextField id="outlined-basic" label="Informações do Evento" variant="outlined" />
            </Box>
        </FormControl >
        // 

    );
}

export default EventCreation;
