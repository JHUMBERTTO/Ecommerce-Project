import React from 'react'
import "./searchbar.css"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {GrClose} from "react-icons/gr"
import { useProductContext } from "../../context/ProductContext";

const SearchBar = ({setShowSearchBar}) => {
  const [query, setQuery] = useState("")
  const navigate = useNavigate()
  const context = useProductContext()

  const onChange = (e) => {
    setQuery(e.target.value);
  }


  return (
    <div className="searchModal">
      <div className="formField">
        <input 
        type="text"
        className='searchBar'
        autoFocus
        placeholder='Search for products' 
        value={query}
        onChange={onChange}
        />
        <GrClose
          className='closeBtn' 
          onClick={() => 
          {setShowSearchBar(false)}
            }/>
      </div>
      <div className="searchResultContent">
        <div className="searchResults">
          {context.lista.filter(item => {
            if (context.query === '') {
              return item 
            } else if (item.title.toLowerCase().includes(query.toLowerCase())) {
              return item 
            }
            return null
          }).map((item) =>(
            <div key={item.id} className="searchResultItem" onClick={() => {
              navigate(`product/${item.id}`)
              setShowSearchBar(false)
            }}>
              <div className="imgContainer">
                <img className="imageSearchBar" src={item.image} alt="Image item" />
              </div>
              <div className="productDetails">
                <span className="nameItem">{item.title}</span>
                <span className="descItem">{item.description}</span>
              </div>
            </div>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default SearchBar