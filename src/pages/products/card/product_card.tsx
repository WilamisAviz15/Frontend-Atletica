import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


export default function ProdutoCard({ imagemPath, titulo, descricao }: { imagemPath: string, titulo: string, descricao: string }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="300"
                    image={imagemPath}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {titulo}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {descricao}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="contained" color="success">
                    Comprar
                </Button>
            </CardActions>
        </Card>
    );
}
