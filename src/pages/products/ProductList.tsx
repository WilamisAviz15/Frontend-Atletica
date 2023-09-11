import React, { useEffect, useState } from "react";
import axios from "axios";

import { shirt1, shirt2, shirt3, shirt4, shirt5, cup1, cup2, cup3, shorts1, shorts2, shorts3, shorts4 } from "./images";
import { ProductInterface } from "../interfaces/ProductInterface";
import { Grid } from "@mui/material";

import ProductCard from "./product-card";
import { environment } from "../../environments/environment";

const ProductList = () => {
  const [products, setProducts] = useState<ProductInterface[]>();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${environment.api}/produtos/`);
        setProducts(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      {products &&
        products.map((product) => (
          <Grid item xs={3}>
            <ProductCard
              id={product.id}
              imagem={product.imagem}
              nome={product.nome}
              descricao={product.descricao}
              preco={product.preco}
              qtdEstoqueInicial={product.qtdEstoqueInicial}
              qtdSaldo={product.qtdSaldo}
              qtdVendidaTotal={product.qtdVendidaTotal}
            />
          </Grid>
        ))}
    </>
  );
};

export default ProductList;
