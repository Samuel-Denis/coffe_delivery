import { CreditCard, CurrencyDollar, Bank, Money } from 'phosphor-react'
import { PagamentoContainer, PagHeader, ButtonPag } from './styles'

import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { useCart } from '../../../../Hooks/Cart/HookCart'

export function Pagamento() {
  const { pagamento } = useCart()

  return (
    <PagamentoContainer>
      <PagHeader>
        <CurrencyDollar size={16} />
        <div>
          <h3>Pagamento</h3>
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </div>
      </PagHeader>
      <ButtonPag>
        <ToggleGroup.Root
          type="single"
          onValueChange={(payment) => {
            if (payment) pagamento(payment)
          }}
        >
          <ToggleGroup.Item type="button" value="CARTÃO DE CRÉDITO">
            <CreditCard size={16} /> <span>Cartão de Crédito</span>
          </ToggleGroup.Item>

          <ToggleGroup.Item type="button" value="CARTÃO DE DÉBITO">
            <Bank size={16} /> <span>CARTÃO DE DÉBITO</span>
          </ToggleGroup.Item>

          <ToggleGroup.Item type="button" value="DINHEIRO">
            <Money size={16} /> <span>DINHEIRO</span>
          </ToggleGroup.Item>
        </ToggleGroup.Root>
      </ButtonPag>
    </PagamentoContainer>
  )
}
