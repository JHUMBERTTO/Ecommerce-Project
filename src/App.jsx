import './App.css'
import HomeProducts from './pages/HomeProducts'
import ProductProvider from './context/ProductContext'
import RoutesIndex from './routes'
import { Outlet } from 'react-router-dom'

function App () {
  return (
    <div>
      <ProductProvider>
        <RoutesIndex>
        <HomeProducts />
        <Outlet/>
        </RoutesIndex>
      </ProductProvider>
    </div>
  )
}

export default App
