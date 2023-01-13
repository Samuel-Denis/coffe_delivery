import { Minus, Plus } from 'phosphor-react'
import { toast } from 'react-toastify'
import { useCart } from '../../Hooks/Cart/HookCart'
import { ButtonAddContainer } from './styles'

interface ButtonAddProps {
  coffeeId: number
}

export function ButtonAdd({ coffeeId }: ButtonAddProps) {
  const { addCoffeeCart, cart, updateProductAmount, removeProduct } = useCart()

  function handleAddCoffee() {
    addCoffeeCart(coffeeId)
  }
  function handleDecrementCoffee() {
    const coffee = cart.find((c) => c.id === coffeeId)

    if (!coffee) {
      toast('Adicione um produto primeiro')
    } else {
      if (coffee.amount === 1) {
        removeProduct(coffee)
      } else {
        updateProductAmount({
          coffeeId,
          amount: coffee.amount - 1,
        })
      }
    }
  }
  return (
    <ButtonAddContainer>
      <button
        type="button"
        data-testid="add-product-button"
        onClick={() => handleDecrementCoffee()}
      >
        <Minus />
      </button>
      <span>
        {cart.find((c) => c.id === coffeeId)
          ? cart.find((c) => c.id === coffeeId)?.amount
          : 0}
      </span>
      <button
        type="button"
        data-testid="add-product-button"
        onClick={() => handleAddCoffee()}
      >
        <Plus />
      </button>
    </ButtonAddContainer>
  )
}
