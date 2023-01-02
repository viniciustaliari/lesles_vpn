import React from 'react'
import './index.css'

export const NavList = (props) => {
  return (
        <ul className={props.className}>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Features</a></li>
            <li><a href='#'>Pricing</a></li>
            <li><a href='#'>Testimonals</a></li>
            <li><a href='#'>Help</a></li>
        </ul>
  )
}
