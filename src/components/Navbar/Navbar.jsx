import './navbar.css'
import {TbSearch} from "react-icons/tb"
import {FiShoppingBag} from "react-icons/fi"
import {BsBookmarkHeart} from "react-icons/bs"
import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const[scrolled, setScrolled ] = useState(false)
  const handleScroll = () => {
    const offset = window.scrollY;
    if(offset> 200){
      setScrolled(true)
    }else {
      setScrolled(false)
    }
  }

  useEffect(( ) => {
    window.addEventListener("scroll", handleScroll)
  }, [])
  return (
    <nav className={`mainNav ${scrolled ? 'stickyNav' : ""}`}>
      <div className="navContent">
        <ul className="left">
          <li className="hac">Home</li>
          <li className="hac">About</li>
          <li className="hac">Categories</li>
        </ul>
        <div className="center">JHGL</div>
        <div className="right">
          <TbSearch/>
          <BsBookmarkHeart/>
          <span className='icon'>
            <FiShoppingBag/>
            <span className='counter'>5</span>
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar