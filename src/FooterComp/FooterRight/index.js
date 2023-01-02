import React from 'react'
import './FooterRight.css'

export const FooterRight = () => {
  return (
    <div className='contenedor-rightFooter'>
        <ul>
            <li className='titulo-footer'><strong>Product</strong></li>
            <li><a href='#/'>Download</a></li>
            <li><a href='#/'>Pricing</a></li>
            <li><a href='#/'>Locations</a></li>
            <li><a href='#/'>Server</a></li>
            <li><a href='#/'>Countries</a></li>
            <li><a href='#/'>Blog</a></li>
        </ul>
        <ul>
            <li className='titulo-footer'><strong>Engage</strong></li>
            <li><a href='#/'>LeslesVPN</a></li>
            <li><a href='#/'>FAQ</a></li>
            <li><a href='#/'>Tutorials</a></li>
            <li><a href='#/'>About Us</a></li>
            <li><a href='#/'>Privacy Policy</a></li>
            <li><a href='#/'>Tearms of Service</a></li>
        </ul>
        <ul>
            <li className='titulo-footer'><strong>Earn Money</strong></li>
            <li><a href='#/'>Affiliate</a></li>
            <li><a href='#/'>Become Partner</a></li>
        </ul>
    </div>
  )
}
