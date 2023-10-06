import React, { useEffect, useState } from "react";
import axios from "axios";

import { shirt1, cup1, shorts1, generic } from "./images";
import { ProductInterface } from "../../interfaces/product-interface";
import { Grid } from "@mui/material";

import ProductCard from "../product-card";
import { environment } from "../../../environments/environment";
import Loading from "../../../components/spinner";

const ProductList = () => {
  const [products, setProducts] = useState<ProductInterface[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleProducts = (products: ProductInterface[]) => {
    return products.map((product) => {
      switch (product.categoria) {
        case "Camiseta":
          product.imagem = shirt1;
          break;
        case "Bermuda":
          product.imagem = shorts1;
          break;
        case "Copo":
          product.imagem = cup1;
          break;
        default:
          product.imagem = generic;
      }
      return product;
    });
  };

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await axios.get(`${environment.api}/produtos/`);
        setProducts(handleProducts(response.data));
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
      setIsLoading(false);
    }

    fetchData();
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      {products &&
        products.map((product) => (
          <Grid item xs={3}>
            <ProductCard
              id={product.id}
              imagem={product.imagem!}
              nome={product.nome}
              descricao={product.descricao}
              preco={product.preco}
              qtdEstoqueInicial={product.qtdEstoqueInicial}
              qtdSaldo={product.qtdSaldo}
              qtdVendidaTotal={product.qtdVendidaTotal}
              categoria={product.categoria}
            />
          </Grid>
        ))}
    </>
  );
};

export default ProductList;
