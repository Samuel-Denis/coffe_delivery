import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'
import { AddressProvider } from './Hooks/Addres/HookAddress'
import { CartProvider } from './Hooks/Cart/HookCart'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <AddressProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </AddressProvider>
      </CartProvider>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </ThemeProvider>
  )
}

export default App
