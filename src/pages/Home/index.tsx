import image from '../../assets/imagem.png'
import {
  HomeContainer,
  ContentContainer,
  InfoContainer,
  ItensContainer,
  GridItensContainer,
} from './styles'

import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { ListCoffee } from './components/ListCoffee'
export function Home() {
  const color = useTheme()
  return (
    <HomeContainer>
      <ContentContainer>
        <InfoContainer>
          <h1>
            Encontre o cafè perfeito <br /> para qualquer hora do dia
          </h1>
          <p>
            Com o Coffe Delivery você recebe seu café onde estiver, a <br />{' '}
            qualquer hora
          </p>
          <GridItensContainer>
            <ItensContainer cor={color['yellow-500']}>
              <div>
                <ShoppingCart size={16} weight={'fill'} color={'white'} />
              </div>
              <p>Compra simples e segura</p>
            </ItensContainer>

            <ItensContainer cor={color['base-text']}>
              <div>
                <Package size={16} weight={'fill'} color={'white'} />
              </div>
              <p>Embalagem mantén o café intacto</p>
            </ItensContainer>

            <ItensContainer cor={color['yellow-200']}>
              <div>
                <Timer size={16} weight={'fill'} color={'white'} />
              </div>
              <p>Entrega rápida e rastreada</p>
            </ItensContainer>

            <ItensContainer cor={color['pourple-200']}>
              <div>
                <Coffee size={16} weight={'fill'} color={'white'} />
              </div>
              <p>O café fresquinho até você</p>
            </ItensContainer>
          </GridItensContainer>
        </InfoContainer>
        <img src={image} alt="Coffee cup image" />
      </ContentContainer>
      <ListCoffee />
    </HomeContainer>
  )
}
