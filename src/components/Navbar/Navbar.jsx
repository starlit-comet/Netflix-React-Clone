import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import netflixLogo from '../../assets/logo.png'
import searchIcon from '../../assets/search_icon.svg'
import bellIcon from '../../assets/bell_icon.svg'
import  profileImg from '../../assets/profile_img.png'
import caretIcon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'
const Navbar = () => {
  const navRef = useRef();
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>=80){
        navRef.current.classList.add('nav-dark')
      }else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  },[])
  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar-left">
        <img src={netflixLogo} alt="Netflix Logo.png" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
    <img src={searchIcon} alt="SearchIcon.svg" className='icons' />
    <p>Children</p>
    <img src={bellIcon} alt="bell_icon.svg" />
    <div className="navbar-profile">
      <img src={profileImg} alt='Profile_img.png' />
      <img src={caretIcon} alt="dropDown.icon" />
      <div className="dropdown">
        <p onClick={()=>{logout()}}>SignOut of Netflix</p>
      </div>
    </div>
      </div>
    </div>
  )
}

export default Navbar