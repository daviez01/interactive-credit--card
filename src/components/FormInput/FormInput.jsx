import React from 'react'
import './FormInput.scss'

const FormInput = ({ type, placeholder, handleOnChange, handleOnBlur, length, error }) => {
  return (
    <>
      <input type={type} placeholder={placeholder} onChange={handleOnChange} onBlur={handleOnBlur} maxLength={length} style={{border: error ? '1px solid red' : '1px solid hsl(279, 6%, 55%)', marginBottom: error ? '3px' : '1rem'}} className='input' />
      {console.log(error)}
    </>
  )
}

export default FormInput
