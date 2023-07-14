import { useState } from 'react'
import './Form.scss'
import FormInput from '../FormInput/FormInput'

const Form = ({handleName, handleNumber, handleMonth, handleYear, handleCvc, handleSubmit}) => {
    const [nameError, setNameError] = useState(false)
    const [numberError, setNumberError] = useState(false)
    const [cvvError, setCvvError] = useState(false)
    // const [dateError, setDateError] = useState(false)
    const [monthError, setMonthError] = useState(false)
    const [yearError, setYearError] = useState(false)
    const [formError, setFormError] = useState(true)

    const nameCheck = (e) => {
            // Create a regular expression that matches only letters.
            const lettersOnlyRegex = /^[a-zA-Z\s]+$/;
          
            // Check if the input field value matches the regular expression.
            const isLettersOnly = e.target.value.match(lettersOnlyRegex);
          
            // If the input field value does not match the regular expression, return an error.
             (!isLettersOnly) ? setNameError(true) : setNameError(false);

             handleName(e)
    }

    const numberCheck = (e) => {
        const numbersOnlyRegex = /^[0-9]+$/;
        const isNumbersOnly = e.target.value.match(numbersOnlyRegex);
        (!isNumbersOnly) ? setNumberError(true) : setNumberError(false);

        // e.target.value.length < 16 ? setNumberError(true) : setNumberError(false)
        handleNumber(e)
    }

    const cvvCheck = (e) => {   
        e.target.value.length < 3 ? setCvvError(true) : setCvvError(false)
        handleCvc(e)
    }

    const monthCheck = (e) => {
        const lessThan12Regex = /^(?:0[1-9]|1[0-2])$/;
        const isLessThan12 = e.target.value.match(lessThan12Regex);
        (!isLessThan12 || e.target.value.length < 2 ) ? setMonthError(true) : setMonthError(false);
        // e.target.value.length < 2 ? setMonthError(true) : setMonthError(false)
        handleMonth(e)
    }

    const yearCheck = (e) => {
        e.target.value.length < 2 ? setYearError(true) : setYearError(false)
        handleYear(e)
    }

    // const dateCheck = (e) => {
    //     monthCheck(e);
    //     yearCheck(e);
    //     if (monthError || yearError) {
    //       setDateError(true);
    //     } else {
    //       setDateError(false);
    //     }
    //   }
    
    const formCheck = (e) => { 
        if (nameError || numberError || cvvError || monthError || yearError) {
            setFormError(true);
            } else {
            setFormError(false);
            handleSubmit(e);
        }
    }



  return (
    <div className='form'>
      <label htmlFor='cardName'>CARDHOLDER NAME</label>
        <FormInput type='text' id='cardName' placeholder='e.g. Jane Appleseed' handleOnChange={nameCheck} handleOnFocus={nameCheck} handleOnBlur={nameCheck} length='25' error={nameError}/>
        {nameError && <p className='error'>Please enter a valid name</p>}
        <label htmlFor='cardNumber'>CARD NUMBER</label>
        <FormInput type='text' id='cardNumber' placeholder='1234 5678 9123 0000' handleOnChange={numberCheck} handleOnFocus={numberCheck} handleOnBlur={numberCheck} length='16' error={numberError} />
        {numberError && <p className='error'>Wrong format, numbers only</p>}
        <div className="flex">
            <div className="date">
                <label htmlFor='cardDate'>EXP. DATE (MM/YY)</label>
                <div className="date-field">
                    <FormInput type='text' id='cardDateMonth' placeholder='MM' handleOnChange={monthCheck} handleOnBlur={monthCheck} length='2' error={(monthError || yearError)} />
                    <FormInput type='text' id='cardDateYear' placeholder='YY' handleOnChange={yearCheck}  handleOnBlur={yearCheck} length='2' error={(yearError || monthError)}/>
                </div>
                {(monthError || yearError) && <p className='error'>can't be blank</p>}
            </div>
            <div className="cvc">
                <label htmlFor='cardCvc'>CVC</label>
                <FormInput type='text' id='cvc' placeholder='e.g. 123' handleOnChange={cvvCheck} handleOnFocus={cvvCheck} handleOnBlur={cvvCheck} length='3' error={cvvError}/>
                {cvvError && <p className='error'>can't be blank</p>}
            </div>
        </div>
        <button className='btn' onClick={formCheck} >Confirm</button>

    </div>
  )
}

export default Form
