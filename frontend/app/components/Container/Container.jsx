import React from 'react'

export default function Container(props) {
  return (
    <div className='max-w-7xl px-4 mx-auto'>
        <div className="w-full">
        {props.children}
        </div>
      
    </div>
  )
}
