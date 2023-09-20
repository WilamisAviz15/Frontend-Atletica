export interface AuthRegisterInterface {
  username: string;
  email: string;
  cpf: string;
  password: string;
  nome: string;
  telefone: string;
  endereco: string;
  matricula: string;
}

export interface FormErrors {
  [fieldName: string]: string[];
}

export type TField = "username" | "email" | "cpf" | "password" | "nome" | "telefone" | "endereco" | "matricula";
