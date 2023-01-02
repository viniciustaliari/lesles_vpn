import React from 'react'
import './index.css';

export const TextComponent = () => {
  return (
    <div className='contenedor'>
      <h4 className='title'>We Provide Many <br/> Features You Can Use</h4>
      <p className='subtitle'>You can explore the features that we provide with fun and <br/> have their own functions each feature.</p>
      <ul>
        <li className='item'><div className='icon'></div>Powerfull online protection.</li>
        <li className='item'><div className='icon'></div>Internet without borders.</li>
        <li className='item'><div className='icon'></div>Supercharged VPN.</li>
        <li className='item'><div className='icon'></div>No specific time limits.</li>
      </ul>
    </div>
  )
}
