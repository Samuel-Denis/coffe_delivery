import { createContext, ReactNode, useContext, useState } from 'react'

interface AddressData {
  cep: string
  rua: string
  numero: string
  bairro: string
  cidade: string
  uf: string
}

interface AddressContextData {
  address: AddressData | undefined
  createAddress: (data: AddressData) => void
}
const AddressContext = createContext({} as AddressContextData)

interface CartProviderProps {
  children: ReactNode
}

export function AddressProvider({ children }: CartProviderProps) {
  const [address, setAddress] = useState<AddressData>()

  const createAddress = (data: AddressData) => {
    setAddress(data)
  }

  return (
    <AddressContext.Provider
      value={{
        address,
        createAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  )
}

export function useAddress(): AddressContextData {
  const context = useContext(AddressContext)

  return context
}
