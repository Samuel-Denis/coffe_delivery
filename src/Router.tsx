import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Checkout } from './pages/Checkout/Checkout'
import { Home } from './pages/Home'
import { Succes } from './pages/Succes/Succes'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/cart" element={<Checkout />} />
        <Route path="/succes" element={<Succes />} />
      </Route>
    </Routes>
  )
}
