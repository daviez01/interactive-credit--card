import React from 'react'
import './Back.scss'
import BackBg from '../../images/bg-card-back.png'

const Back = ({cvc}) => {
  return (
    <div className='back'>
      <p>{cvc}</p>
    </div>
  )
}

export default Back
