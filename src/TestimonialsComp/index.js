import React from 'react';
import './TestimonialsComp.css';
import { Testimonials } from './Testimonials';
import { TituloComp } from './TituloComp';

export const TestimonalsComp = () => {
  return (
    <div className='contenedor-section-testimonials'>
        <TituloComp/>
        <Testimonials/>
    </div>
  )
}
