import { ButtonAdd } from '../../../../components/Button/ButtonAdd'
import {
  CoffeCheckoutContainer,
  NameAndRemoveContainer,
  ButtonRemove,
  TotalContainer,
} from './styles'

import { Trash } from 'phosphor-react'
import { useCart } from '../../../../Hooks/Cart/HookCart'
import { formatMoney } from '../../../../utils/formatMoney'

export function Carrinho() {
  const { cart, removeProduct, totalItems, entrega } = useCart()

  const total = totalItems + entrega

  return (
    <>
      {cart.map((coffee) => {
        return (
          <CoffeCheckoutContainer key={coffee.id}>
            <img src={coffee.imagem} alt="" />
            <NameAndRemoveContainer>
              <h3>{coffee.nome}</h3>
              <div>
                <ButtonAdd coffeeId={coffee.id}></ButtonAdd>
                <ButtonRemove
                  type="button"
                  data-testid="add-product-button"
                  onClick={() => removeProduct(coffee)}
                >
                  <Trash /> Remover
                </ButtonRemove>
              </div>
            </NameAndRemoveContainer>
            <h3>R${formatMoney(coffee.priceTotal)}</h3>
          </CoffeCheckoutContainer>
        )
      })}

      <TotalContainer>
        <div>
          <p>Total de items</p>
          <p>R${formatMoney(totalItems)}</p>
        </div>
        <div>
          <p>Entrega</p>
          <p>R$ {formatMoney(entrega)}</p>
        </div>
        <div>
          <h3>Total</h3>
          <h3>R${formatMoney(total)}</h3>
        </div>
      </TotalContainer>
    </>
  )
}
