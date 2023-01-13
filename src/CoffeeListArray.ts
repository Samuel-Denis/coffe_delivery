const url = 'http://localhost:5173'

export const Coffes = [
  {
    id: 1,
    nome: 'Expressos Tradicional',
    tipos: [{ id: 1, tipo: 'TRADICIONAL' }],
    descricao: 'O tradicional café feito com água quente e grãos moídos',
    preco: 9.9,
    estoque: 1,
    imagem: `${url}/src/assets/Expresso.png`,
  },

  {
    id: 2,
    nome: 'Expressos Americano',
    tipos: [{ id: 1, tipo: 'TRADICIONAL' }],
    descricao: 'Expresso diluído, menos intenso que o tradicional',
    preco: 9.9,
    estoque: 10,
    imagem: `${url}/src/assets/Americano.png`,
  },

  {
    id: 3,
    nome: 'Expressos Cremoso',
    tipos: [{ id: 1, tipo: 'TRADICIONAL' }],
    descricao: 'Café expresso tradicional com espuma cremosa',
    preco: 9.9,
    estoque: 10,
    imagem: `${url}/src/assets/Expresso-cremoso.png`,
  },

  {
    id: 4,
    nome: 'Expressos Gelado',
    tipos: [
      { id: 1, tipo: 'TRADICIONAL' },
      { id: 2, tipo: 'GELADO' },
    ],
    descricao: 'Bebida preparada com café expresso e cubos de gelo',
    preco: 9.9,
    estoque: 10,
    imagem: `${url}/src/assets/Cafe-Gelado.png`,
  },

  {
    id: 5,
    nome: 'Latte',
    tipos: [
      { id: 1, tipo: 'TRADICIONAL' },
      { id: 2, tipo: 'COM LEITE' },
    ],
    descricao:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    preco: 9.9,
    estoque: 10,
    imagem: `${url}/src/assets/Latte.png`,
  },

  {
    id: 6,
    nome: 'Café com leite',
    tipos: [
      { id: 1, tipo: 'TRADICIONAL' },
      { id: 2, tipo: 'COM LEITE' },
    ],
    descricao: 'Meio a meio de expresso tradicional com leite vaporizado',
    preco: 9.9,
    estoque: 10,
    imagem: `${url}/src/assets/Cafe-Leite.png`,
  },

  {
    id: 7,
    nome: 'Capuccino',
    tipos: [
      { id: 1, tipo: 'TRADICIONAL' },
      { id: 2, tipo: 'COM LEITE' },
    ],
    descricao:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    preco: 9.9,
    estoque: 10,
    imagem: `${url}/src/assets/Capuccino.png`,
  },

  {
    id: 8,
    nome: 'Macchiato',
    tipos: [
      { id: 1, tipo: 'TRADICIONAL' },
      { id: 2, tipo: 'COM LEITE' },
    ],
    descricao: 'Café expresso misturado com um pouco de leite quente e espuma',
    preco: 9.9,
    estoque: 10,
    imagem: `${url}/src/assets/Macchiato.png`,
  },

  {
    id: 9,
    nome: 'Mocaccino',
    tipos: [
      { id: 1, tipo: 'TRADICIONAL' },
      { id: 2, tipo: 'COM LEITE' },
    ],
    descricao: 'Café expresso com calda de chocolate, pouco leite e espuma',
    preco: 9.9,
    estoque: 10,
    imagem: `${url}/src/assets/Mochaccino.png`,
  },

  {
    id: 10,
    nome: 'Chocolate Quente',
    tipos: [
      { id: 1, tipo: 'ESPECIAL' },
      { id: 2, tipo: 'COM LEITE' },
    ],
    descricao: 'Bebida feita com chocolate dissolvido no leite quente e café',
    preco: 9.9,
    estoque: 10,
    imagem: `${url}/src/assets/Chocolate-Quente.png`,
  },

  {
    id: 11,
    nome: 'Cubano',
    tipos: [
      { id: 1, tipo: 'TRADICIONAL' },
      { id: 2, tipo: 'ALCOÓLICO' },
      { id: 3, tipo: 'GELADO' },
    ],
    descricao:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    preco: 9.9,
    estoque: 10,
    imagem: `${url}/src/assets/Cubano.png`,
  },

  {
    id: 12,
    nome: 'Havaiano',
    tipos: [{ id: 1, tipo: 'ESPECIAL' }],
    descricao: 'Bebida adocicada preparada com café e leite de coco',
    preco: 9.9,
    estoque: 10,
    imagem: `${url}/src/assets/Havaiano.png`,
  },

  {
    id: 13,
    nome: 'Árabe',
    tipos: [{ id: 1, tipo: 'ESPECIAL' }],
    descricao: 'Bebida preparada com grãos de café árabe e especiarias',
    preco: 9.9,
    estoque: 10,
    imagem: `${url}/src/assets/Arabe.png`,
  },

  {
    id: 14,
    nome: 'Irlandês',
    tipos: [
      { id: 1, tipo: 'ESPECIAL' },
      { id: 2, tipo: 'ALCOÓLICO' },
    ],
    descricao: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    preco: 9.9,
    estoque: 10,
    imagem: `${url}/src/assets/Macchiato.png`,
  },
]
