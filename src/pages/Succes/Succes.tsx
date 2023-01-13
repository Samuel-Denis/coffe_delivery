import {
  Container,
  InfoEndereco,
  InfoPagamento,
  InformeDeliveryContainer,
  InfoTimer,
  SuccesContainer,
} from './styles'

import delivery from '../../assets/delivery.png'
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'
import { useAddress } from '../../Hooks/Addres/HookAddress'
import { useCart } from '../../Hooks/Cart/HookCart'

export function Succes() {
  const { address } = useAddress()
  const { tipoDePagamento } = useCart()
  return (
    <SuccesContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <span>Agora é só aguardar que logo o café chegará até você</span>
      <section>
        <InformeDeliveryContainer>
          <Container>
            <InfoEndereco>
              <div>
                <MapPin weight="fill" />
              </div>
              <p>
                Entrega em Rua {address?.rua}, {address?.numero} <br />
                {address?.bairro} - {address?.cidade}, {address?.uf}
              </p>
            </InfoEndereco>
            <InfoTimer>
              <div>
                <Timer weight="fill" />
              </div>

              <p>
                Previsão de entrega <br /> 20 min - 30 min
              </p>
            </InfoTimer>

            <InfoPagamento>
              <div>
                <CurrencyDollar />
              </div>
              <p>
                Pagamento na entrega <br />
                {tipoDePagamento}
              </p>
            </InfoPagamento>
          </Container>
        </InformeDeliveryContainer>
        <img src={delivery} alt="" />
      </section>
    </SuccesContainer>
  )
}
