import React from "react";

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import man1 from './img/man1.jpg';
import man2 from './img/man2.jpg';

function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src={man1} sx={{ width: 100, height: 100 }} />
      <Avatar alt="Remy Sharp" src={man2} sx={{ width: 100, height: 100 }} />
    </Stack>
  );
}

const Members = () => {
  return <>
    <h1>Membros da atlética</h1>
    <ImageAvatars />
  </>
};

export default Members;
