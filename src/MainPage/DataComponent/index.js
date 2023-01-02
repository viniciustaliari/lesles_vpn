import React from 'react'
import './DataComponent.css'

export const DataComponent = ({ className }) => {
  return (
    <div className={className}>
      <div className='first hijo'>
        <div className='first-child-image image'></div>
        <div className='text'>
          <p className='number'>90+</p>
          <p className='name'>Users</p>
        </div>
      </div>
      <div className='second hijo'>
        <div className='second-child-image image'></div>
        <div className='text'>
          <p className='number'>30+</p>
          <p className='name'>Locations</p>
        </div>
      </div>
      <div className='third hijo'>
        <div className='third-child-image image'></div>
        <div className='text'>
          <p className='number'>50+</p>
          <p className='name'>Servers</p>
        </div>
      </div>
    </div>
  )
}
