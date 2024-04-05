import React from 'react'
import '../../Styles/home.css'
const Card = ({backgroundImage}) => {
  return (
    <div className='card'  >
        <img src={backgroundImage} alt="" />
    </div>
  )
}

export default Card