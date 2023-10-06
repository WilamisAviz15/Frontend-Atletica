export interface ProductCreateInterface {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  qtdEstoqueInicial: number;
  qtdVendidaTotal: number;
  qtdSaldo: number;
  categoria: string;
}
