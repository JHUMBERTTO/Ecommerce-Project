import React, { useEffect } from "react";
import { useProductContext } from "../../context/ProductContext";
import { Outlet ,Link, useParams, Navigate } from 'react-router-dom'
import './productlist.css'

const ProductList = () => {
  const context = useProductContext();
  const {id} = useParams();
  console.log(context.selectedProduct)

  return (
    <div className="container">
      {context.lista && Array.isArray(context.lista)
        ? context.lista.map((Product) => ( 
            <div className="item" key={Product.id} onClick={() => {
              context.setSelectedProduct(Product)
              console.log(context.selectedProduct)
            }}
            >
            <Link to={`/Product/${Product.id}`}> 
              <img src={Product.image} alt="Items" className="imagen" />
              <h4>{Product.title}</h4>
            </Link> 
            </div>
          ))
        : null}
    </div>
  );
};

export default ProductList;
