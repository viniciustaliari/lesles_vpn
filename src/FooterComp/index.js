import React from 'react'
import './FooterComp.css'
import { FooterIzquierdo } from './FooterIzquierdo'
import { FooterRight } from './FooterRight'

export const FooterComp = () => {
  return (
    <div className='contenedor-footer'>
        <FooterIzquierdo/>
        <FooterRight/>
    </div>
  )
}
