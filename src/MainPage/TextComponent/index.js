import React from 'react'
import './TextComponent.css'

export const TextComponent = ({ className }) => {
  return (
    <div className={className}>
      <h1 className='titulo'>Want anything to be easy with <b>LaslesVPN</b></h1>
      <p className='texto'>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
      <button className='boton'>Get Started</button>
    </div>
  )
}
