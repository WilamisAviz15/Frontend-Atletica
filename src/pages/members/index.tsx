import React, { useEffect, useState } from "react";
import axios from "axios";

import { environment } from "../../environments/environment";
import { MemberInterface } from "./interfaces/Member.interface";
import ImageAvatars from "./ImageAvatar";
import Loading from "../../components/spinner";

const Members = () => {
  const [members, setMembers] = useState<MemberInterface[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await axios.get(`${environment.api}/membros/`);
        console.log(response.data);
        setMembers(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
      setIsLoading(false);
    }

    fetchData();
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      <ImageAvatars members={members} />
    </>
  );
};

export default Members;
