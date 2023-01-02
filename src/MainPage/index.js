import React from 'react'
import './index.css'
import { TextComponent } from './TextComponent';
import { ImageComponent } from './ImageComponent'
import { DataComponent } from './DataComponent'

export const MainPage = () => {
  return (
    <div className='mainPage'>
        <TextComponent className='text-comp' />
        <ImageComponent className='img-comp'/>
        <DataComponent className='data-comp' />
    </div>
  )
}
