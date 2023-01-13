import {
  CardContainer,
  PriceAddCartContainer,
  CartContainer,
  SectionTypeContainer,
} from './styles'

import { ShoppingCart } from 'phosphor-react'
import { ButtonAdd } from '../../components/Button/ButtonAdd'

interface TiposProps {
  id: number
  tipo: string
}
interface CardCoffeeProps {
  id: number
  nome: string
  descricacao: string
  tipos: TiposProps[]
  estoque: number
  preco: number
  imagem: string
}

export function CardCoffee(data: CardCoffeeProps) {
  return (
    <CardContainer>
      <img src={data.imagem} alt="" />

      <SectionTypeContainer>
        {data.tipos.map((tipo) => (
          <ul key={tipo.id}>
            <li>{tipo.tipo}</li>
          </ul>
        ))}
      </SectionTypeContainer>

      <h3>{data.nome}</h3>
      <span>{data.descricacao}</span>

      <PriceAddCartContainer>
        <p>
          R$ <span>{data.preco.toPrecision(3)}</span>
        </p>
        <ButtonAdd coffeeId={data.id} />
        <CartContainer>
          <ShoppingCart size={22} weight="fill" />
        </CartContainer>
      </PriceAddCartContainer>
    </CardContainer>
  )
}
