import React from 'react'
import { useProductContext } from '../../context/ProductContext'

const Product = () => {
  const context = useProductContext()

  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={context.selectedProduct.image} alt="" />
        </div>
      </div>
      <div className="right">
      
      </div>
    </div>
  )
}

export default Product