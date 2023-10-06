import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AxiosError } from "axios";
import EmailIcon from "@mui/icons-material/Email";

import waitListService from "../waitlist.service";
import { WaitListInterface } from "../interfaces/waitlist.interface";
import { CartToast } from "../../../components/snackbar";
import { SnackbarInterface } from "../../members/interfaces/Snackbar.interface";
import { formatDate } from "../../../shared/util";
import Loading from "../../../components/spinner";

const WaitListTable = () => {
  const [wailtList, setWaitList] = useState<WaitListInterface[]>([]);
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
  useEffect(() => {
    const handleData = async () => {
      setIsLoading(true);
      try {
        const res = await waitListService.httpGet();
        setWaitList(res);
      } catch (error: any) {
        if (error instanceof AxiosError) {
          console.error(error);
          handleOpenSnackbar(error.message, "error");
        }
      }
      setIsLoading(false);
    };

    handleData();
  }, []);

  const sendEmail = () => {
    console.log("send mail");
  };

  return (
    <>
      {isLoading && <Loading />}
      <h2>Banco de espera</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Nome</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">CPF</TableCell>
              <TableCell align="right">Telefone</TableCell>
              <TableCell align="right">Endereço</TableCell>
              <TableCell align="right">Matricula</TableCell>
              <TableCell align="right">Curso</TableCell>
              <TableCell align="right">Período</TableCell>
              <TableCell align="right">data e hora da inscrição</TableCell>
              <TableCell align="right">Diretoria desejada</TableCell>
              <TableCell align="right">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {wailtList.map((row) => (
              <TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell align="right">{row.nome}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.cpf}</TableCell>
                <TableCell align="right">{row.telefone}</TableCell>
                <TableCell align="right">{row.endereco}</TableCell>
                <TableCell align="right">{row.matricula}</TableCell>
                <TableCell align="right">{row.curso}</TableCell>
                <TableCell align="right">{row.periodo}</TableCell>
                <TableCell align="right">{formatDate(row.data, "bar", true)}</TableCell>
                <TableCell align="right">{row.diretoria_desejada}</TableCell>
                <TableCell align="right">
                  <IconButton aria-label="Enviar e-mail" title="Enviar e-mail" onClick={sendEmail}>
                    <EmailIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
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

export default WaitListTable;
