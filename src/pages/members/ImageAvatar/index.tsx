import { Avatar, Stack } from "@mui/material";

import man1 from "../img/man1.jpg";
import man2 from "../img/man2.jpg";
import man3 from "../img/man3.jpg";
import man4 from "../img/man4.png";
import man5 from "../img/man5.jpg";
import man6 from "../img/man6.jpg";
import woman1 from "../img/woman1.jpg";
import woman2 from "../img/woman2.jpg";
import woman3 from "../img/woman3.jpg";
import woman4 from "../img/woman4.jpg";
import woman5 from "../img/woman5.jpg";
import woman6 from "../img/woman6.jpg";
import { MemberInterface } from "../interfaces/Member.interface";

export default function ImageAvatars({ members }: { members: MemberInterface[] | undefined }) {
  return (
    <>
      <Stack direction="column" alignItems={"center"} marginTop={5} width={"100%"}>
        <h1>Membros da atlética</h1>
        <Stack direction="row" marginTop={5} spacing={6}>
          {members?.map((member) => (
            <div className="peaple">
              <Avatar alt={member.nome} src={man2} sx={{ width: "10vw", height: "10vw" }} />
              <p>{member.nome}</p>
            </div>
          ))}
        </Stack>
      </Stack>
    </>
  );
}