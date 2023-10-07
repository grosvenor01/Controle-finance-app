import React from 'react'
import "./Services.css"
export default function ServiceItem({img, title, desc}) {
  return (
    <div className='ServiceItem'>
      <img src={img} />
      <h2 className='service-h2'>{title}</h2>
      <p className='service-p'>{desc}</p>
    </div>
  )
}
