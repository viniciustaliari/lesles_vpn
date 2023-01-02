import React, { useEffect, useState } from 'react';
import logo from '../img/logo.png';
import { NavList } from './NavList';
import './index.css'
import menu from '../img/menu.png'

function useWindowSize(){
  const [width, setWidth] = React.useState([window.innerWidth]);
  React.useEffect(()=>{
    const handleSize = ()=>{
      setWidth([window.innerWidth]);
    }
    window.addEventListener("resize", handleSize);
    return()=>{
      window.removeEventListener("resize", handleSize)
    }
  }, [])
  return width;
}

export const NavBar = () => {
  const [width] = useWindowSize();
  const [responsive, setResponsive] = useState(false);
  const [click, setClick] = useState(false);
  const [clase, setClase] = useState('lista-responsive');
  const [claseHeader, setClaseHeader] = useState('');

  useEffect(()=>{
    if(width>=1000){
      setResponsive(false);
    }else if(width<1000){
      setResponsive(true)
    }
  }, [width])

const handleClick = ()=>{
  setClick(!click);
}

useEffect(()=>{
  if(click){
    setClase('menu-responsive');
    setClaseHeader('header-responsive')
  }else{
    setClase('lista-responsive');
    setClaseHeader('')
  }
}, [click])

  if(!responsive){
    return(
      <nav className='nav-container'>
        <div className='container-logo'><a href='/'><img alt='logo' src='../img/logo.png'/></a></div>  
        <NavList className='list-container'/> 
        <div className='btn-container'>
            <a href='#' className='sgi-btn'>Sign In</a>
            <button className='sgu-btn'>Sign Up</button>
        </div>
      </nav>
    )
  }else if(responsive){
    return(
      <nav className={`nav-container ${claseHeader}`}>
        <div className='container-logo'><a href='/'><img alt='logo' src='../img/logo.png'/></a></div>
        <button className='boton-sand' onClick={handleClick}></button>
        <ul className={clase}>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Features</a></li>
            <li><a href='#'>Pricing</a></li>
            <li><a href='#'>Testimonals</a></li>
            <li><a href='#'>Help</a></li>
        </ul>
      </nav>
    )
  }
}
