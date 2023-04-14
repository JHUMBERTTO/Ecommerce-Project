import { useFetch } from '../hooks/useFetch'
import React, { createContext, useState, useContext, useEffect } from 'react'

const ProductoContext = createContext()

export default function ProductoProvider (props) {
  const [selectedProducto, setSelectedProducto] = useState({})
  const [lista, setLista] = useState({})
  const { data, loading, error } = useFetch('https://fakestoreapi.com/products')

  useEffect(() => {
    setLista(data)
    console.log(lista)
  }, [data])

  const value = {
    lista,
    loading,
    error,
    selectedProducto,
    setSelectedProducto
  }

  return (
    <ProductoContext.Provider value={value}>
      {props.children}
    </ProductoContext.Provider>
  )
}

export const useProductoContext = () => {
  const context = useContext(ProductoContext)
  return context
}
