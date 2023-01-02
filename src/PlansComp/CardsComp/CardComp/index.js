import React from 'react'
import './CardComp.css'

export const CardComp = (props) => {
  return (
    <div className='contenedorCards'>
        <div className={`imagenCard ${props.nombreClase}`}></div>
        <p className='planName'>{props.planName}</p>
        <ul className='listaCard'>
            {props.ventajas.map(item=>{
                return <li> <div className='iconoLista'></div>{item.nombre}</li>
            })}
        </ul>
        {props.mes ?  <div className='contenedorPrecio'>
            <p className='precio'>{props.precio}</p>
            <p className='precioMonth'>{props.mes}</p>
        </div>: <div className='contenedorPrecio'>
            <p className='precioSolo'>{props.precio}</p>
        </div>}
        <button className='botonCard'>Select</button>
    </div>
  )
}
