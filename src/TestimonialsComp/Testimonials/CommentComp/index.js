import React from 'react'
import './CommentComp.css'

export const CommentComp = (props) => {
  return (
    <div className='contenedor-comentarios'>
        <div className='contenedor-perfil-arriba'>
            <div className={`img-perfil ${props.imgClass}`}></div>
            <div className='text-container'>
                <h4>{props.name}</h4>
                <p>{props.location}</p>
            </div>
            <div className='rate'>
                <p>{props.rate}</p>
                <div className='star'></div>
            </div>
        </div>
        <p className='comment-paragraph'>{props.comment}</p>
    </div>
  )
}
