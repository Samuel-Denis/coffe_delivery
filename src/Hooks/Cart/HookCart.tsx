import { createContext, ReactNode, useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { Coffes } from '../../CoffeeListArray'
import { CoffeModel } from '../../Models/CoffeeModel'

interface Coffee {
  id: number
  nome: string
  preco: number
  imagem: string
  priceTotal: number
  amount: number
}

interface UpdateProductAmount {
  coffeeId: number
  amount: number
}

interface CartContextData {
  cart: Coffee[]
  totalItems: number
  entrega: number
  tipoDePagamento: string
  pagamento: (pg: string) => void
  clearCart: () => void
  addCoffeeCart: (coffeeId: number) => void
  updateProductAmount: (data: UpdateProductAmount) => void
  removeProduct: (coffee: Coffee) => void
}
const CartContext = createContext({} as CartContextData)

interface CartProviderProps {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Coffee[]>(() => {
    const storagedCart = localStorage.getItem('@CoffeeDelivery:cart')

    if (storagedCart) {
      return JSON.parse(storagedCart)
    }

    return []
  })

  const totalItems = cart.reduce((total, cartItem) => {
    return total + cartItem.preco * cartItem.amount
  }, 0)

  const [tipoDePagamento, setTipoDePagamento] = useState('')

  const entrega = cart.length > 0 ? 10 : 0

  const pagamento = (pg: string) => {
    setTipoDePagamento(pg)
  }

  const addCoffeeCart = (coffeeId: number) => {
    const coffeesCart = cart
    let newCoffeeCart: Coffee
    try {
      Coffes.map((coffee: CoffeModel) => {
        if (coffee.id === coffeeId) {
          const coffeeCart = coffeesCart.find(
            (coffee) => coffee.id === coffeeId,
          )

          if (coffeeCart) {
            updateProductAmount({
              coffeeId,
              amount: coffeeCart.amount + 1,
            })
          } else {
            newCoffeeCart = {
              id: coffee.id,
              amount: 1,
              imagem: coffee.imagem,
              nome: coffee.nome,
              preco: coffee.preco,
              priceTotal: coffee.preco,
            }

            setCart((state) => [...state, newCoffeeCart])
          }
          localStorage.setItem('@CoffeeDelivery:cart', JSON.stringify(cart))
        }
        return null
      })
    } catch {
      toast('Não foi possivel adicionar produto')
    }
  }

  const updateProductAmount = async ({
    coffeeId,
    amount,
  }: UpdateProductAmount) => {
    try {
      if (amount <= 0) {
        return
      }

      const estoque = Coffes.find((coffee) => coffee.id === coffeeId)?.estoque

      if (!estoque || amount > estoque) {
        toast.error('Quantidade solicitada fora de estoque')
        return
      }
      const newCart = [...cart]
      const coffeeExists = newCart.find((coffee) => coffee.id === coffeeId)

      if (coffeeExists) {
        coffeeExists.amount = amount
        coffeeExists.priceTotal = coffeeExists.preco * amount

        setCart(newCart)
      } else {
        throw new Error()
      }

      localStorage.setItem('@CoffeeDelivery:cart', JSON.stringify(newCart))
    } catch {
      toast('Erro na alteração de quantidade do produto')
    }
  }

  const removeProduct = async (coffe: Coffee) => {
    try {
      const productsNew = cart.filter((p: Coffee) => p !== coffe)

      console.log(productsNew)

      setCart(productsNew)

      localStorage.setItem('@CoffeeDelivery:cart', JSON.stringify(productsNew))
    } catch {
      toast('Não foi possivel remover produto')
    }
  }

  const clearCart = () => {
    const newCart: Coffee[] = []

    setCart(newCart)

    localStorage.setItem('@CoffeeDelivery:cart', JSON.stringify(newCart))
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addCoffeeCart,
        removeProduct,
        updateProductAmount,
        totalItems,
        entrega,
        clearCart,
        tipoDePagamento,
        pagamento,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart(): CartContextData {
  const context = useContext(CartContext)

  return context
}
