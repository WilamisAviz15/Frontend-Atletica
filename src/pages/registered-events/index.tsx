import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import "./registred-events.css";
import soccerIMG from "./img/soccer.jpg";

interface MediaCardProps {
  title: string;
  description: string;
  date: string;
  local: string;
  path: string;
}

function MediaCard({ title, description, date, local, path }: MediaCardProps) {
  useEffect(() => {}, []);

  return (
    <Card sx={{ width: 400, margin: 3 }}>
      <CardMedia sx={{ height: 250 }} image={path} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {date}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Local: {local}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Saber Mais</Button>
      </CardActions>
    </Card>
  );
}

const RegistredEvents = () => {
  return (
    <div className="registredConteiner">
      <Grid container spacing={3} width={"80%"}>
        <Grid item xs={4}>
          <MediaCard
            title="Titulo do Evento"
            description="Descrição do evento..."
            date="12/10/2003"
            local="Nome do Local..."
            path={soccerIMG}
          />
        </Grid>
        <Grid item xs={4}>
          <MediaCard
            title="Titulo do Evento"
            description="Descrição do evento..."
            date="12/10/2003"
            local="Nome do Local..."
            path={soccerIMG}
          />
        </Grid>
        <Grid item xs={4}>
          <MediaCard
            title="Titulo do Evento"
            description="Descrição do evento..."
            date="12/10/2003"
            local="Nome do Local..."
            path={soccerIMG}
          />
        </Grid>
        <Grid item xs={4}>
          <MediaCard
            title="Titulo do Evento"
            description="Descrição do evento..."
            date="12/10/2003"
            local="Nome do Local..."
            path={soccerIMG}
          />
        </Grid>
        <Grid item xs={4}>
          <MediaCard
            title="Titulo do Evento"
            description="Descrição do evento..."
            date="12/10/2003"
            local="Nome do Local..."
            path={soccerIMG}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default RegistredEvents;
