import './App.css'
import Home from './pages/Home'
import ProductProvider from './context/ProductContext'
import RoutesIndex from './routes'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

function App () {
  return (
    <div>
      <ProductProvider>
        <Navbar/>
        <RoutesIndex>
        <Home/>
        </RoutesIndex>
      </ProductProvider>
    </div>
  )
}

export default App
