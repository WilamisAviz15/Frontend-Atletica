import { EventInterface } from "../interfaces/event.interface";

export const initialForm: EventInterface = {
  nome: "",
  descricao: "",
  data: new Date(),
  local: "",
  hora: "",
};
