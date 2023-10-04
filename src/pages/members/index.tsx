import React, { useEffect, useState } from "react";
import axios from "axios";

import { environment } from "../../environments/environment";
import { MemberInterface } from "./interfaces/Member.interface";
import ImageAvatars from "./ImageAvatar";

const Members = () => {
  const [members, setMembers] = useState<MemberInterface[]>();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${environment.api}/membros/`);
        console.log(response.data);
        setMembers(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <ImageAvatars members={members} />
    </>
  );
};

export default Members;
