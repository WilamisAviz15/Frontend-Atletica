import { ProductCreateInterface } from "../interfaces/product-create-interface";
import { ProductInterface } from "../interfaces/product-interface";

export const initialForm: ProductInterface = {
  nome: "",
  descricao: "",
  categoria: "",
  imagem: "",
  preco: "",
  qtdEstoqueInicial: 0,
  qtdSaldo: 0,
  qtdVendidaTotal: 0,
  id: 0,
};

export const initialCreateForm: ProductCreateInterface = {
  nome: "",
  descricao: "",
  categoria: "",
  preco: 0.0,
  qtdEstoqueInicial: 0,
  qtdSaldo: 0,
  qtdVendidaTotal: 0,
  id: 0,
};

export const category = ["Camiseta", "Bermuda", "Copo"];
