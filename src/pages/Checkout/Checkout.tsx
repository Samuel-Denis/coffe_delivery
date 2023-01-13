import { FormProvider, useForm } from 'react-hook-form'
import { Carrinho } from './components/Carrinho/Carrinho'
import { Pagamento } from './components/Pagamento/Pagamento'
import {
  CheckoutContainer,
  CompleteSeuPedido,
  CafesSelecionados,
  AddressContainer,
  HeaderStyles,
  CartContainer,
  ButtonPedido,
  AnimationCycle,
} from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { NewAddressForm } from './components/Form/FormData'
import { useNavigate } from 'react-router-dom'

import { MapPin } from 'phosphor-react'
import { useState } from 'react'
import { useAddress } from '../../Hooks/Addres/HookAddress'
import { useCart } from '../../Hooks/Cart/HookCart'

const newAddressFormValidationSchema = zod.object({
  cep: zod.string().min(8, 'Informe seu cep').max(10),
  rua: zod.string().min(2, 'Informe o nome da rua').max(80),
  numero: zod.string().min(1, 'Informe o numero da residencia'),
  bairro: zod.string().min(2, 'Informe o nome doseu bairro').max(20),
  cidade: zod.string().min(2, 'Informe sua cidade').max(30),
  uf: zod.string().min(2, 'Informe seu estado').max(2),
})

type NewAddressFormData = zod.infer<typeof newAddressFormValidationSchema>

interface AddressFormData {
  cep: string
  rua: string
  numero: string
  bairro: string
  cidade: string
  uf: string
}

export function Checkout() {
  const newAddressForm = useForm<NewAddressFormData>({
    resolver: zodResolver(newAddressFormValidationSchema),
    defaultValues: {
      cep: '12310920',
      rua: 'React Js And Nodejs',
      numero: '02',
      bairro: 'Desafio 02',
      cidade: 'Rocketseat',
      uf: 'IG',
    },
  })
  const nav = useNavigate()

  const { createAddress } = useAddress()
  const { clearCart, tipoDePagamento, cart } = useCart()

  const { handleSubmit, reset } = newAddressForm

  const [loading, setLoading] = useState(false)

  function handleCreateNewAddress(data: AddressFormData) {
    if (tipoDePagamento === '') {
      alert('Selecione a forma de pagamento...')
      return tipoDePagamento
    }
    setLoading(true)
    createAddress(data)
    clearCart()
    reset()

    setTimeout(() => {
      nav('/succes', { replace: true })
      setLoading(false)
    }, 1000)
  }
  let isSubmitDisable = true

  if (tipoDePagamento) {
    if (cart.length > 0) isSubmitDisable = false
  }

  console.log(isSubmitDisable)

  return loading ? (
    <AnimationCycle />
  ) : (
    <form onSubmit={handleSubmit(handleCreateNewAddress)} action="">
      <CheckoutContainer>
        <CompleteSeuPedido>
          <h3>Complete seu pedido</h3>
          <AddressContainer>
            <section>
              <HeaderStyles>
                <MapPin size={24} />
                <div>
                  <h3>Endereço de Entrega</h3>
                  <span>Informe o endereço onde desejareceber seu pedido</span>
                </div>
              </HeaderStyles>
              <FormProvider {...newAddressForm}>
                <NewAddressForm />
              </FormProvider>
            </section>
          </AddressContainer>
          <Pagamento />
        </CompleteSeuPedido>
        <CafesSelecionados>
          <h3>Cafés selecionados</h3>
          <CartContainer>
            <Carrinho />
            <ButtonPedido disabled={isSubmitDisable} type="submit">
              CONFIRMAR PEDIDO
            </ButtonPedido>
          </CartContainer>
        </CafesSelecionados>
      </CheckoutContainer>
    </form>
  )
}
