import React from 'react'
import { useProductContext } from '../../context/ProductContext'
import {FaInstagram} from "react-icons/fa"
import {FiShoppingBag} from "react-icons/fi"
import "./product.css"

const Product = () => {
  const context = useProductContext()

  return (
    <div className='productContainer'>
      <div className="layout">
        <div className="singleProductPage">  
          <div className="leftContainer">
              <img className="imageItem" src={context.selectedProduct.image} alt="" />
          </div>
          <div className="rightContainer">
            <span className="nameProduct">{context.selectedProduct.title}</span>
            <span className="priceProduct">{`$${context.selectedProduct.price}`}</span>
            <span className="description">{context.selectedProduct.description}</span>
            <div className="cartButtons">
              <div className="quantityButtons">
                <span className='dashPlus'>-</span>
                <span className='dashPlus'></span>
                <span className='dashPlus'>+</span>
              </div>
              <button className='addToBagButton'>
                <FiShoppingBag size={20}/>
                ADD TO BAG
              </button>
            </div>
            <span className="divider"/>

            <div>
              <span>
                <span>
                  <a href="https://www.instagram.com/j.humbertto/" target="_blank" className="socialIcon">
                    <FaInstagram />
                  </a>
                </span>
              </span>  
            </div>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Product