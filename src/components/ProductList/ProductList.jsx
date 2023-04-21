import React, { useEffect } from "react";
import { useProductContext } from "../../context/ProductContext";
import { Outlet ,Link, useParams, Navigate } from 'react-router-dom'
import './productlist.css'

const ProductList = () => {
  const context = useProductContext();

  return (
    <div className="productsContainer">
        {context.lista && Array.isArray(context.lista)
          ? context.lista.map((Product) => ( 
             
              <div className="productCard" key={Product.id} onClick={() => {
                context.setSelectedProduct(Product)
             }}
              >
                <div className="thumbnail">
                <Link to={`/Product/${Product.id}`}>
                  <img src={Product.image} alt="Items" className="image" />
                </Link>
                </div>
                <div className="productDetails">
                  <span className="name">{Product.title}</span>
                  <span className="price">{`$${Product.price}`}</span>
                </div>
              </div>
          ))
        : null}
    </div>
    );
  };

export default ProductList;
