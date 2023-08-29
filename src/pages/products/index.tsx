import ProdutoCard from "./card/product_card";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import camisa1 from './img/camisa1.jpg';
import camisa2 from './img/camisa2.jpg';
import camisa3 from './img/camisa3.jpg';
import camisa4 from './img/camisa4.jpg';
import camisa5 from './img/camisa5.jpg';
import copo1 from './img/copo1.jpg';
import copo2 from './img/copo2.jpg';
import copo3 from './img/copo3.jpg';
import bermuda1 from './img/bermuda1.jpg';
import bermuda2 from './img/bermuda2.jpg';
import bermuda3 from './img/bermuda3.jpg';
import bermuda4 from './img/bermuda4.webp';

const Products = () => {
  return (<>
    {/* <h1>Produtos disponíveis</h1>
    <ProdutoCard /> */}
    <Container>
      <Grid container spacing={2} margin={3} width={'100%'}>
        <Grid item xs={3}>
          <ProdutoCard imagemPath={camisa1} titulo="Camisa1" descricao="Camisa1 Esportiva" />
        </Grid>
        <Grid item xs={3}>
          <ProdutoCard imagemPath={camisa2} titulo="Camisa2" descricao="Camisa2 Esportiva" />
        </Grid>
        <Grid item xs={3}>
          <ProdutoCard imagemPath={camisa3} titulo="Camisa3" descricao="Camisa3 Esportiva" />
        </Grid>
        <Grid item xs={3}>
          <ProdutoCard imagemPath={camisa4} titulo="Camisa4" descricao="Camisa4 Esportiva" />
        </Grid>
        <Grid item xs={3}>
          <ProdutoCard imagemPath={camisa5} titulo="Camisa5" descricao="Camisa5 Esportiva" />
        </Grid>
        <Grid item xs={3}>
          <ProdutoCard imagemPath={bermuda3} titulo="bermuda3" descricao="bermuda3 Esportiva" />
        </Grid>
        <Grid item xs={3}>
          <ProdutoCard imagemPath={bermuda4} titulo="bermuda4" descricao="bermuda4 Esportiva" />
        </Grid>
        <Grid item xs={3}>
          <ProdutoCard imagemPath={bermuda1} titulo="bermuda1" descricao="bermuda1 Esportiva" />
        </Grid>
        <Grid item xs={3}>
          <ProdutoCard imagemPath={bermuda2} titulo="bermuda2" descricao="bermuda2 Esportiva" />
        </Grid>
        <Grid item xs={3}>
          <ProdutoCard imagemPath={copo1} titulo="Copo1" descricao="Copo1 Esportivo" />
        </Grid>
        <Grid item xs={3}>
          <ProdutoCard imagemPath={copo2} titulo="Copo2" descricao="Copo2 Esportivo" />
        </Grid>
        <Grid item xs={3}>
          <ProdutoCard imagemPath={copo3} titulo="Copo3" descricao="Copo3 Esportivo" />
        </Grid>

        {/* <Grid item xs={3}>
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
        </Grid> */}
      </Grid >
    </Container >

  </>)
};

export default Products;
