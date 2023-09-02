import React from "react";

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import man1 from './img/man1.jpg';
import man2 from './img/man2.jpg';
import man3 from './img/man3.jpg';
import man4 from './img/man4.png';
import man5 from './img/man5.jpg';
import man6 from './img/man6.jpg';
import woman1 from './img/woman1.jpg';
import woman2 from './img/woman2.jpg';
import woman3 from './img/woman3.jpg';
import woman4 from './img/woman4.jpg';
import woman5 from './img/woman5.jpg';
import woman6 from './img/woman6.jpg';

function ImageAvatars() {
  return (<>
    <Stack direction="row" spacing={4}>
      <Avatar alt="Remy Sharp" src={man2} sx={{ width: 100, height: 100 }} />
      <Avatar alt="Remy Sharp" src={woman1} sx={{ width: 100, height: 100 }} />
      <Avatar alt="Remy Sharp" src={woman3} sx={{ width: 100, height: 100 }} />
      <Avatar alt="Remy Sharp" src={man3} sx={{ width: 100, height: 100 }} />
      <Avatar alt="Remy Sharp" src={woman2} sx={{ width: 100, height: 100 }} />
      <Avatar alt="Remy Sharp" src={man4} sx={{ width: 100, height: 100 }} />

    </Stack>
    <Stack direction="row" spacing={4}>
      <Avatar alt="Remy Sharp" src={woman6} sx={{ width: 100, height: 100 }} />
      <Avatar alt="Remy Sharp" src={woman5} sx={{ width: 100, height: 100 }} />
      <Avatar alt="Remy Sharp" src={man1} sx={{ width: 100, height: 100 }} />
      <Avatar alt="Remy Sharp" src={man5} sx={{ width: 100, height: 100 }} />
      <Avatar alt="Remy Sharp" src={woman4} sx={{ width: 100, height: 100 }} />
      <Avatar alt="Remy Sharp" src={man6} sx={{ width: 100, height: 100 }} />
    </Stack>
  </>
  );
}

const Members = () => {
  return <>
    <h1>Membros da atlética</h1>
    <ImageAvatars />
  </>
};

export default Members;
