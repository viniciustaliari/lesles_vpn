import React from 'react';
import { ImageComponent } from './ImageComponent/index';
import './FeaturesComponent.css';
import { TextComponent } from './TextComponent/index';


export const FeaturesComponent = () => {
  return (
    <div className='contenedor-features'>
        <ImageComponent/>
        <TextComponent/>
    </div>
  )
}
