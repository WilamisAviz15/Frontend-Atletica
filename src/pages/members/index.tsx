import React from "react";

import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import man1 from "./img/man1.jpg";
import man2 from "./img/man2.jpg";
import man3 from "./img/man3.jpg";
import man4 from "./img/man4.png";
import man5 from "./img/man5.jpg";
import man6 from "./img/man6.jpg";
import woman1 from "./img/woman1.jpg";
import woman2 from "./img/woman2.jpg";
import woman3 from "./img/woman3.jpg";
import woman4 from "./img/woman4.jpg";
import woman5 from "./img/woman5.jpg";
import woman6 from "./img/woman6.jpg";

function ImageAvatars() {
  return (
    <>
      <Stack direction="column" alignItems={"center"} marginTop={5} width={"100%"}>
        <h1>Membros da atlética</h1>
        <Stack direction="row" marginTop={5} spacing={6}>
          <div className="peaple">
            <Avatar alt="Remy Sharp" src={man2} sx={{ width: "10vw", height: "10vw" }} />
            <p>Antônio</p>
          </div>
          <div className="peaple">
            <Avatar alt="Remy Sharp" src={woman1} sx={{ width: "10vw", height: "10vw" }} />
            <p>Maria</p>
          </div>
          <div className="peaple">
            <Avatar alt="Remy Sharp" src={woman3} sx={{ width: "10vw", height: "10vw" }} />
            <p>Eduarda</p>
          </div>
          <div className="peaple">
            <Avatar alt="Remy Sharp" src={man3} sx={{ width: "10vw", height: "10vw" }} />
            <p>João</p>
          </div>
          <div className="peaple">
            <Avatar alt="Remy Sharp" src={woman2} sx={{ width: "10vw", height: "10vw" }} />
            <p>Alice</p>
          </div>
          <div className="peaple">
            <Avatar alt="Remy Sharp" src={man4} sx={{ width: "10vw", height: "10vw" }} />
            <p>Pedro</p>
          </div>
        </Stack>
        <Stack direction="row" spacing={6} marginTop={5}>
          <div className="peaple">
            <Avatar alt="Remy Sharp" src={woman6} sx={{ width: "10vw", height: "10vw" }} />
            <p>Poliana</p>
          </div>
          <div className="peaple">
            <Avatar alt="Remy Sharp" src={woman5} sx={{ width: "10vw", height: "10vw" }} />
            <p>Geovana</p>
          </div>
          <div className="peaple">
            <Avatar alt="Remy Sharp" src={man1} sx={{ width: "10vw", height: "10vw" }} />
            <p>Lucas</p>
          </div>
          <div className="peaple">
            <Avatar alt="Remy Sharp" src={man5} sx={{ width: "10vw", height: "10vw" }} />
            <p>Fabrício</p>
          </div>
          <div className="peaple">
            <Avatar alt="Remy Sharp" src={woman4} sx={{ width: "10vw", height: "10vw" }} />
            <p>Ana</p>
          </div>
          <div className="peaple">
            <Avatar alt="Remy Sharp" src={man6} sx={{ width: "10vw", height: "10vw" }} />
            <p>Marcos</p>
          </div>
        </Stack>
      </Stack>
    </>
  );
}

const Members = () => {
  return (
    <>
      <ImageAvatars />
    </>
  );
};

export default Members;
