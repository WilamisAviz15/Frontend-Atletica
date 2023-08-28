import ProdutoCard from "./card/product_card";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const Products = () => {
  return (<>
    {/* <h1>Produtos disponíveis</h1>
    <ProdutoCard /> */}

    <Grid container spacing={2} margin={2} width={'80%'} justifyContent={'center'}>
      <Grid item xs={3}>
        <ProdutoCard />
      </Grid>
      <Grid item xs={3}>
        <ProdutoCard />
      </Grid>
      <Grid item xs={3}>
        <ProdutoCard />
      </Grid>
      <Grid item xs={3}>
        <ProdutoCard />
      </Grid>
      <Grid item xs={3}>
        <ProdutoCard />
      </Grid>
      <Grid item xs={3}>
        <ProdutoCard />
      </Grid>
      <Grid item xs={3}>
        <ProdutoCard />
      </Grid>
      <Grid item xs={3}>
        <ProdutoCard />
      </Grid>
    </Grid >

  </>)
};

export default Products;
