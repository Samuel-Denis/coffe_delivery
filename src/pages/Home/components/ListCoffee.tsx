import { Coffes } from '../../../CoffeeListArray'
import { CardCoffee } from '../../Card/card'
import { ListCoffeContainer, TitleContainer, SectionContainer } from './styles'

export function ListCoffee() {
  return (
    <SectionContainer>
      <TitleContainer>
        <h1>Nossos Cafés</h1>
      </TitleContainer>
      <ListCoffeContainer>
        {Coffes.map((coffee) => {
          return (
            <CardCoffee
              key={coffee.id}
              id={coffee.id}
              nome={coffee.nome}
              descricacao={coffee.descricao}
              imagem={coffee.imagem}
              estoque={coffee.preco}
              preco={coffee.preco}
              tipos={coffee.tipos}
            />
          )
        })}
      </ListCoffeContainer>
    </SectionContainer>
  )
}
