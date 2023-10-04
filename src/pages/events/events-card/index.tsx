import React from "react";
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";

import { EventCardProps } from "../interfaces/event-card-prop.interface";

export default function EventsCard({ title, description, date, local, path, time }: EventCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 250 }} image={path} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {date} às {time}
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
