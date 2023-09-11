import React, { useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

import { CartContext } from "../../../hooks/useContext/CartContext";
import { CartToast } from "../../../components/snackbar";
import { generateId } from "../../../shared/util";

interface IProps {
  id: number;
  nome: string;
  preco: string;
  descricao: string;
  qtdEstoqueInicial: number;
  qtdVendidaTotal: number;
  qtdSaldo: number;
  imagem: string;
}

export default function ProductCard(item: IProps) {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleOpenSnackbar = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  const context = useContext(CartContext);

  if (!context) {
    return null;
  }

  const { dispatch } = context;

  const addToCart = (item: IProps) => {
    dispatch({ type: "ADD_TO_CART", payload: { id: generateId(), product: item } });
    handleOpenSnackbar();
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" height="300" image={item.imagem} alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.nome}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.descricao}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.preco}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button variant="contained" color="success" onClick={() => addToCart(item)}>
            Comprar
          </Button>
        </CardActions>
      </Card>
      <CartToast open={openSnackbar} handleClose={handleCloseSnackbar} />
    </>
  );
}
