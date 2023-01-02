import React from 'react'
import './SubComp.css'

export const SubComp = () => {
  return (
    <div className='contenedor-sub'>
        <div className='div-del-texto'>
            <h3>Subscribe Now for <br/>Get Special Features</h3>
            <p>Let's subscribe with us and find the fun.</p>
        </div>
        <div className='div-boton'>
            <button className='boton-sub'>Subscribe Now</button>
        </div>
    </div>
  )
}
