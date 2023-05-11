import './navbar.css'
import {TbSearch} from "react-icons/tb"
import {FiShoppingBag} from "react-icons/fi"
import {BsBookmarkHeart} from "react-icons/bs"
import React, { useEffect, useState } from 'react'
import ShopBag from '../../Cart/ShopBag/ShopBag'
import { useNavigate} from "react-router-dom"
import SearchBar from '../SearchBar/SearchBar'

const Navbar = () => {
  const navigate = useNavigate();
  const[scrolled, setScrolled ] = useState(false)
  const[showShopBag, setShowShopBag ] = useState(false)
  const[showSearchBar, setShowSearchBar ] = useState(false)
  const handleScroll = () => {
    const offset = window.scrollY;
    if(offset> 180){
      setScrolled(true)
    }else {
      setScrolled(false)
    }
  }


  useEffect(( ) => {
    window.addEventListener("scroll", handleScroll)
  }, [])
  
  return (
  <>  
    <nav className={`mainNav ${scrolled ? 'stickyNav' : ""}`}>
      <div className="navContent">
        <ul className="left">
          <li className="hac" onClick={()=>{navigate("/") }}>Home</li>
        </ul>
        <div className="center" onClick={()=>{navigate("/") }}>JHGL</div>
        <div className="right">
          <TbSearch onClick={() =>
            {setShowSearchBar(true)}
          }/>
          <BsBookmarkHeart/>
          <span className='icon' onClick={() =>
            {setShowShopBag(true)}
          }>
            <FiShoppingBag/>
            <span className='counter'>5</span>
          </span>
        </div>
      </div>
    </nav>
    {showShopBag && <ShopBag setShowShopBag={setShowShopBag}/>}
    {showSearchBar && <SearchBar setShowSearchBar={setShowSearchBar}/>}
  </>
  )
}

export default Navbar