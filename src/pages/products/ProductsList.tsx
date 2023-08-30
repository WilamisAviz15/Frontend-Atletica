import React, { useEffect, useState } from "react";

import { shirt1, shirt2, shirt3, shirt4, shirt5, cup1, cup2, cup3, shorts1, shorts2, shorts3, shorts4 } from "./images";
import { ProductInterface } from "../interfaces/ProductInterface";
import { Grid } from "@mui/material";

import ProdutoCard from "./product-card";

const ProductsList = () => {
  const [products, setProducts] = useState<ProductInterface[]>();

  useEffect(() => {
    let products: ProductInterface[] = [
      {
        id: 1,
        name: "Camisa1",
        description: "Camisa1 Esportiva",
        image: shirt1,
      },
      {
        id: 2,
        name: "Camisa2",
        description: "Camisa2 Esportiva ",
        image: shirt2,
      },
      {
        id: 3,
        name: "Camisa3",
        description: "Camisa3 Esportiva ",
        image: shirt3,
      },
      {
        id: 4,
        name: "Camisa4",
        description: "Camisa4 Esportiva ",
        image: shirt4,
      },
      {
        id: 5,
        name: "Camisa5",
        description: "Camisa5 Esportiva ",
        image: shirt5,
      },
      {
        id: 6,
        name: "Bermuda1",
        description: "Bermuda1 Esportiva ",
        image: shorts1,
      },
      {
        id: 7,
        name: "Bermuda1",
        description: "Bermuda1 Esportiva ",
        image: shorts1,
      },
      {
        id: 8,
        name: "Bermuda2",
        description: "Bermuda2 Esportiva ",
        image: shorts2,
      },
      {
        id: 9,
        name: "Bermuda3",
        description: "Bermuda3 Esportiva ",
        image: shorts3,
      },
      {
        id: 10,
        name: "Bermuda4",
        description: "Bermuda4 Esportiva ",
        image: shorts4,
      },
      {
        id: 11,
        name: "Copo1",
        description: "Copo1 Esportivo ",
        image: cup1,
      },
      {
        id: 12,
        name: "Copo2",
        description: "Copo2 Esportivo ",
        image: cup2,
      },
      {
        id: 13,
        name: "Copo3",
        description: "Copo3 Esportivo ",
        image: cup3,
      },
    ];
    setProducts(products);
  }, []);

  return (
    <>
      {products &&
        products.map((product) => (
          <Grid item xs={3}>
            <ProdutoCard imagePath={product.image} title={product.name} description={product.description} />
          </Grid>
        ))}
    </>
  );
};

export default ProductsList;
