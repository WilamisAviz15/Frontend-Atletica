import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./registred-events.css";
import soccerIMG from './img/soccer.jpg';

// Define the prop types
interface MediaCardProps {
    title: string;
    description: string;
    path: string;
}

function MediaCard({ title, description, path }: MediaCardProps) {
    return (
        <Card sx={{ width: 345, margin: 3 }}>
            <CardMedia
                sx={{ height: 250 }}
                image={path}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Saber Mais</Button>
                {/* <Button size="small">Learn More</Button> */}
            </CardActions>
        </Card>
    );
}


const RegistredEvents = () => {
    return (
        <div className="registredConteiner">
            <MediaCard title="Titulo do Evento" description="Descrição do evento..." path={soccerIMG} />
            <MediaCard title="Titulo do Evento" description="Descrição do evento..." path={soccerIMG} />
            <MediaCard title="Titulo do Evento" description="Descrição do evento..." path={soccerIMG} />
            <MediaCard title="Titulo do Evento" description="Descrição do evento..." path={soccerIMG} />
            <MediaCard title="Titulo do Evento" description="Descrição do evento..." path={soccerIMG} />
            {/* <MediaCard /> */}
        </div>
    );
};

export default RegistredEvents;
