export interface CoffeModel {
  id: number
  nome: string
  tipos: {
    id: number
    tipo: string
  }[]
  descricao: string
  preco: number
  estoque: number
  imagem: string
  amount?: number
}
