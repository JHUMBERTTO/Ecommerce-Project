import {Routes, Route} from 'react-router-dom'
import HomeProducts from '../pages/HomeProducts'
import SingleProduct from '../pages/SingleProduct'


const RoutesIndex = () => {
  return(
    <Routes>
      <Route path='/' element={<HomeProducts />}/>
      <Route path='/Product/:id' element={<SingleProduct />}/>
      <Route path='*' element={<h1>Not found</h1>}></Route>
    </Routes>
  )
}

export default RoutesIndex