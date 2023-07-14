import React from 'react'
import './Front.scss'
import Logo from '../../images/card-logo.svg'

const Front = ({name, number, month, year}) => {
  return (
    <div className='front'>
      <img src={Logo} alt="" />
      <div className="details">
        <p className='digits'>{number}</p>
        <div className="name-exp">
          <p>{name}</p>
          <p>{month} / {year}</p>
        </div>
      </div>
    </div>
  )
}

export default Front
