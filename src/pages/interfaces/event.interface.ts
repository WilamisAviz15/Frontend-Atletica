export interface EventInterface {
  id?: number;
  nome: string;
  descricao: string;
  data: Date | null;
  local: string;
}

export const initialForm: EventInterface = {
  nome: "",
  descricao: "",
  data: null,
  local: "",
};
