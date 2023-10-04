import React, { useEffect, useState } from "react";

import Grid from "@mui/material/Grid";

import "./events-list.css";
import img from "../img/event.png";
import eventService from "../event.service";
import { EventInterface } from "../../interfaces/event.interface";
import EventsCard from "../events-card";
import { formatDate, formatTime } from "../../../shared/util";

const EventsList = () => {
  const [events, setEvents] = useState<EventInterface[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await eventService.httpGet();
        setEvents(response);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="registredConteiner">
      <Grid container spacing={3} width={"80%"}>
        {events.map((event) => (
          <Grid item xs={4} key={event.id}>
            <EventsCard
              title={event.nome}
              description={event.descricao}
              date={formatDate(event.data)}
              local={event.local}
              time={formatTime(event.hora)}
              path={img}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default EventsList;
