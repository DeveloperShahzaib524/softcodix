import React from 'react'
import ticklogo from '../../Assets/logos/Ok.png'
const PackagesCard = ({heading,text1,text2,text3,text4,text5,text6,text7}) => {
  return (
    <div className="package-card">
      <h1>{heading}</h1>
      <div className='content-container'>
        <img src={ticklogo} alt="" />
        <p>{text1}</p>
      </div>
      <div className='content-container'>
        <img src={ticklogo} alt="" />
        <p>{text2}</p>
      </div>
      <div className='content-container'>
        <img src={ticklogo} alt="" />
        <p>{text3}</p>
      </div>
      <div className='content-container'>
        <img src={ticklogo} alt="" />
        <p>{text4}</p>
      </div>
      <div className='content-container'>
        <img src={ticklogo} alt="" />
        <p>{text5}</p>
      </div>
      <div className='content-container'>
        <img src={ticklogo} alt="" />
        <p>{text6}</p>
      </div>
      <div className='content-container'>
        <img src={ticklogo} alt="" />
        <p>{text7}</p>
      </div>
      <button className='orderbutton'>Order now !</button>
    </div>
  )
}

export default PackagesCard