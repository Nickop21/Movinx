import React, { useState } from 'react'
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useLocation, useNavigate } from 'react-router-dom';

import "./style.scss"
import logo from "../../assets/movix-logo.svg";
import ContentWrapper from '../contentWrapper/ContentWrapper';
function Header() {
  const [show,setShow]=useState("top");
  const [lastScrollY,setLastScrollY]=useState(0);
  const [mobileMenue,setMobileMenu]=useState(false);
  const [query,setQuery]=useState("");
  const [showSearch,setShowSearch]=useState("");
  const navigate=useNavigate();
  const location=useLocation();

  const openSearch=()=>{
    setMobileMenu(false);
    setShowSearch(true)

  }
  const openMobileMenu=()=>{
    setMobileMenu(true);
    setShowSearch(false)
  }


  return (
    <header className={`header ${mobileMenue ?"mobileView" : ""}`}>
      <ContentWrapper>
          <img src={logo} alt="" />
          <ul className='menuItems'>
            <li className="menuItem">Movies</li>
            <li className="menuItem">TV Shows</li>
            <li className="menuItem">
              <HiOutlineSearch/>
            </li>
          </ul>
          <div className="mobileMenuItems">
            <HiOutlineSearch/>
            {mobileMenue ? <VscChromeClose onClick={()=>setMobileMenu(false)} /> : <SlMenu onClick={openMobileMenu}/>}
            
            
          </div>
      </ContentWrapper>
    </header>
  )
}

export default Header