import React, { useEffect, useRef, useState } from 'react'
import { CommentComp } from './CommentComp'
import './Testimonials.css'

let testimonios = [
    {name: 'Viezh Robert',
     location: 'Warsaw, Poland',
     rate: 4.5,
     comment: '“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.',
     nombreClase: 'viezh'   
    },
    {name: 'Yessica Christy',
     location: 'Shanxi, China',
     rate: 4.5,
     comment: '“I like it because I like to travel far and still can connect with high speed.”.',
     nombreClase: 'yessica'    
    },
    {name: 'Kim Young Jou',
     location: 'Seoul, South Korea',
     rate: 4.5,
     comment: '“This is very unusual for my business that currently requires a virtual private network that has high security.”.',
     nombreClase: 'kim'  
    },
    {name: 'Viezh Robert',
     location: 'Warsaw, Poland',
     rate: 4.5,
     comment: '“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.',
     nombreClase: 'viezh'   
    },
    {name: 'Yessica Christy',
     location: 'Shanxi, China',
     rate: 4.5,
     comment: '“I like it because I like to travel far and still can connect with high speed.”.',
     nombreClase: 'yessica'    
    },
    {name: 'Kim Young Jou',
     location: 'Seoul, South Korea',
     rate: 4.5,
     comment: '“This is very unusual for my business that currently requires a virtual private network that has high security.”.',
     nombreClase: 'kim'  
    }
];

export const Testimonials = () => {
    
    const carousel = useRef(null);
    const [fondo, setFondo] = useState(1);
    const [color, setColor] = useState([
        {'background-color': '#F53838'},
        {'background-color': '#DDE0E4'},
        {'background-color': '#DDE0E4'}
    ])

    const handleLeftClick = (e)=>{
        e.preventDefault();
        carousel.current.scrollLeft -= 400
        setFondo(fondo-1);
    }

    const handleRightClick = (e)=>{
        e.preventDefault();
        carousel.current.scrollLeft += 400
        setFondo(fondo+1);
    }

    useEffect(()=>{
        if(fondo===1){
            setColor([
                {'background-color': '#F53838'},
                {'background-color': '#DDE0E4'},
                {'background-color': '#DDE0E4'}
            ])
        }else if(fondo===2){
            setColor([
                {'background-color': '#DDE0E4'},
                {'background-color': '#F53838'},
                {'background-color': '#DDE0E4'}
            ])
        }else if(fondo===3){
            setColor([
                {'background-color': '#DDE0E4'},
                {'background-color': '#DDE0E4'},
                {'background-color': '#F53838'}
            ])
        }else{
            setColor([
                {'background-color': '#DDE0E4'},
                {'background-color': '#DDE0E4'},
                {'background-color': '#F53838'}
            ])
            if(fondo>3){
                setFondo(3);
            }else if(fondo<1){
                setFondo(1);
            }
        }
    }, [fondo]);

  return (
    <div className='contenedor-testimonios'>
        <ul className='contenedor-lista' ref={carousel}>
            {testimonios.map(testimonio=>{
                return <li><CommentComp
                name={testimonio.name}
                imgClass={testimonio.nombreClase}
                location={testimonio.location}
                rate={testimonio.rate}
                comment={testimonio.comment}
                /></li>
            })}
        </ul>
        <div className='contenedor-parte-inferior'>
            <div className='contenedor-de-circulos'>
                <div className='contenedor-circulo' style={color[0]} ></div>
                <div className='contenedor-circulo' style={color[1]} ></div>
                <div className='contenedor-circulo' style={color[2]} ></div>
            </div>
            <div className='contenedor-boton'>
                <button className='boton-atras botones' onClick={handleLeftClick}></button>
                <button className='boton-adelante botones' onClick={handleRightClick}></button>
            </div>
        </div>
    </div>
  )
}
