import React, { useContext } from "react";

import { CartContext } from "../../hooks/useContext/CartContext";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

import styles from "./Cart.module.scss";
import Button from "../button";

export default function Cart() {
  const context = useContext(CartContext);

  if (!context) {
    return null;
  }

  const { state, dispatch } = context;

  const removeFromCart = (index: number) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: index });
  };

  const handleSumProducts = () => {
    return state.cartItems
      .reduce((acc, sum) => acc + +sum.product.preco.replace(",", "."), 0)
      .toFixed(2)
      .replace(".", ",");
  };

  return (
    <div className={styles.container}>
      <h2>Meu carrinho</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Produto</TableCell>
              <TableCell align="right">Preço</TableCell>
              <TableCell align="right">Quantidade</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell align="right">Ação</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.cartItems.map((item, index) => (
              <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {item.product.nome}
                </TableCell>
                <TableCell align="right" component="th" scope="row">
                  {item.product.preco}
                </TableCell>
                <TableCell align="right" component="th" scope="row">
                  1
                </TableCell>
                <TableCell align="right" component="th" scope="row">
                  {(Number(item.product.preco.replace(",", ".")) * 1).toFixed(2).replace(".", ",")}
                </TableCell>
                <TableCell align="right" component="th" scope="row">
                  <Button text="Remover" onClick={() => removeFromCart(index)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <h1>Total: {handleSumProducts()}</h1>
      <Button
        customStyles={{ backgroundColor: "#7b1fa2", color: "#f3e5f5", borderStyle: "none" }}
        text="Finalizar compra"
      />
    </div>
  );
}
