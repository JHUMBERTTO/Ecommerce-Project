import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import SingleProduct from '../pages/SingleProduct'


const RoutesIndex = () => {
  return(
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Product/:id' element={<SingleProduct />}/>
      <Route path='*' element={<h1>Not found</h1>}></Route>
    </Routes>
  )
}

export default RoutesIndex