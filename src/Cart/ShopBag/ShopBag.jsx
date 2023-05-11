import React from 'react'
import './shopbag.css'
import {TbZoomCancel} from "react-icons/tb"
import {MdClose} from "react-icons/md"

const ShopBag = ({setShowShopBag}) => {
  return (
    <div className="cartPanel">
      <div className="layer">
        <div className="cartContent">
          <div className="cartHeader">
            <span className="heading">
              Shopping Bag
            </span>
            <span className="closeButton" onClick={() => {
              setShowShopBag(false)
            }}>
              <MdClose fontSize={18}/>
              <span className="text">
                close
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopBag