import React from 'react'
import { BrandsComp } from './BrandsComp'
import { MapComp } from './MapComp'
import './NetWork.css'
import { TextComp } from './TextComp'

export const NetWork = () => {
  return (
    <div className='netWork'>
        <TextComp/>
        <MapComp/>
        <BrandsComp/>
    </div>
  )
}
