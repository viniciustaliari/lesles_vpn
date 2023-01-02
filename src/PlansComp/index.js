import React from 'react'
import { TextComp } from './TextComp'
import { CardsComp } from './CardsComp'
import './Plans.css'

export const PlansComp = () => {
  return (
    <div className='PlansComp'>
      <TextComp/>
      <CardsComp/>
    </div>
  )
}
