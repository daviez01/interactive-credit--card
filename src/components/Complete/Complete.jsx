import React from 'react'
import './Complete.scss'
import CompleteImg from '../../images/icon-complete.svg'

const Complete = ({handleReset}) => {
  return (
    <div className='complete'>
      <img src={CompleteImg} alt="" />
        <h1>THANK YOU!</h1>
        <p>We've added your card details</p>
        <button className='btn' onClick={handleReset} >Continue</button>
    </div>
  )
}

export default Complete
