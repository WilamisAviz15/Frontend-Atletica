import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

interface CartToastProps {
  open: boolean;
  handleClose: (event?: React.SyntheticEvent, reason?: string) => void;
}

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export function CartToast({ open, handleClose }: CartToastProps) {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      open={open}
      autoHideDuration={500}
      onClose={() => handleClose}
    >
      <div>
        <Alert onClose={handleClose} severity="success">
          Item adicionado ao carrinho.
        </Alert>
      </div>
    </Snackbar>
  );
}
