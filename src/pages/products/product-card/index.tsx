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
  name: string;
  description: string;
  image: string;
  price: string;
}

export default function ProductCard(item: IProps) {
  const [cartOpen, setCartOpen] = useState(false);

  const handleAddToCart = () => {
    setCartOpen(true);
  };

  const handleCloseCart = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setCartOpen(false);
  };

  const context = useContext(CartContext);

  if (!context) {
    return null;
  }

  const { dispatch } = context;

  const addToCart = (item: IProps) => {
    dispatch({ type: "ADD_TO_CART", payload: { id: generateId(), product: item } });
    handleAddToCart();
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" height="300" image={item.image} alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button variant="contained" color="success" onClick={() => addToCart(item)}>
            Comprar
          </Button>
        </CardActions>
      </Card>
      <CartToast open={cartOpen} handleClose={handleCloseCart} />
    </>
  );
}
