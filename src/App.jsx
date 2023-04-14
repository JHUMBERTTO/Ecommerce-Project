import './App.css'
import HomeProductos from './pages/HomeProductos'
import ProductoProvider from './context/ProductoContext'

function App () {
  return (
    <div>
      <ProductoProvider>
        <HomeProductos />
      </ProductoProvider>
    </div>
  )
}

export default App
