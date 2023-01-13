import {
  HeaderContainer,
  LocationContainer,
  CartContainer,
  CountAndCart,
} from './styles'

import logoCoffe from '../../assets/Logo.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../Hooks/Cart/HookCart'
export function Header() {
  const { cart } = useCart()
  return (
    <HeaderContainer>
      <img src={logoCoffe} alt="" />
      <nav>
        <NavLink to="/" title="Location">
          <LocationContainer>
            <MapPin size={24} weight={'fill'} />
            <span>Ribeirão Preto, SP</span>
          </LocationContainer>
        </NavLink>
        <NavLink to="cart" title="Cart">
          <CountAndCart>
            <CartContainer>
              <ShoppingCart size={24} weight={'fill'} />
            </CartContainer>

            {cart.length > 0 ? <p>{cart.length}</p> : null}
          </CountAndCart>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
