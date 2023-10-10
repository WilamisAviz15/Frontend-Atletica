import { departments } from "../members-form/options";

export interface MemberInterface {
  id?: string;
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  endereco: string;
  matricula: string;
  curso: string;
  periodo: string;
  diretoria?: string;
  diretoria_desejada: string;
}
