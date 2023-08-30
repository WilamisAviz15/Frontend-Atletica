import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import ProductsList from "./ProductsList";
import { useContext } from "react";
import { CartContext } from "../../hooks/useContext/CartContext";

const Products = () => {
  return (
    <Container>
      <Grid container spacing={2} margin={3} width={"100%"}>
        <ProductsList />
      </Grid>
    </Container>
  );
};

export default Products;
