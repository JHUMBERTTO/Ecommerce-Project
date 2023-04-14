import React from "react";
import { useProductoContext } from "../../context/ProductoContext";

const ProductList = () => {
  const context = useProductoContext();
  return (
    <div>
      {context.lista && Array.isArray(context.lista)
        ? context.lista.map((producto) => (
            <div className="item" key={producto.id}>
              <img src={producto.image} alt="Items" className="imagen" />
              <h4>{producto.title}</h4>
            </div>
          ))
        : null}
    </div>
  );
};

export default ProductList;
