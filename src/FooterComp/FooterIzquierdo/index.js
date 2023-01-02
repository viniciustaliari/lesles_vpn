import React from 'react'
import './FooterIzquierdo.css'

export const FooterIzquierdo = () => {
  return (
    <div className='contenedor-footer-izquierda'>
        <div className='lesles-logo'></div>
        <p><strong>Lesles VPN</strong> is a private virtual network that has unique features and has high security.</p>
        <div className='contenedor-redes'>
            <div className='facebook'></div>
            <div className='twitter'></div>
            <div className='instagram'></div>
        </div>
        <p>©2020Lasles<strong>VPN</strong></p>
    </div>
  )
}
