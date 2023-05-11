import { useFetch } from '../hooks/useFetch'
import React, { createContext, useState, useContext, useEffect } from 'react'

const ProductContext = createContext()

export default function ProductProvider (props) {
  const [selectedProduct, setSelectedProduct] = useState({})
  const { data, loading, error } = useFetch('https://fakestoreapi.com/products')
  const [lista, setLista] = useState({})
  const [search, setSearch] = useState('')

  useEffect(() => {
    setLista(data)
    console.log(lista)
  }, [data])

  const value = {
    lista,
    loading,
    error,
    selectedProduct,
    setSelectedProduct,
    search,
    setSearch
  }

  return (
    <ProductContext.Provider value={value}>
      {props.children}
    </ProductContext.Provider>
  )
}

export const useProductContext = () => {
  const context = useContext(ProductContext)
  return context
}
