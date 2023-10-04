import { MemberInterface } from "../interfaces/Member.interface";

const collegePeriod = [
  "1º período",
  "2º período",
  "3º período",
  "4º período",
  "5º período",
  "6º período",
  "7º período",
  "8º período",
  "9º período",
  "10º período",
];

const departments = ["Financeiro", "Direção", "Marketing", "Eventos"];

const course = ["Ciência da Computação", "Engenharia da Computação"];

const initialForm: MemberInterface = {
  nome: "",
  cpf: "",
  email: "",
  telefone: "",
  endereco: "",
  matricula: "",
  curso: "",
  periodo: "",
  diretoria_desejada: "",
};

export { collegePeriod, course, initialForm, departments };
