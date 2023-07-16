import './App.scss';
import { useState } from 'react';
import Back from './components/Back/Back';
import Form from './components/Form/Form';
import Front from './components/Front/Front';
import Complete from './components/Complete/Complete';

function App() {
  const [name, setName] = useState('JANE APPLESEED');
  const [number, setNumber] = useState('0000 0000 0000 0000');
  const [month, setMonth] = useState('00');
  const [year, setYear] = useState('00');
  const [cvc, setCvc] = useState('000');
  const [submitted, setSubmitted] = useState(false);

  const handleName = (e) => {
    setName(e.target.value.toUpperCase());
  }

  const handleNumber = (e) => {
    if (e.target.value.length > 0) {
      const trimmedDigits = e.target.value.replace(/\s/g, ''); // Remove existing spaces, if any
      const groups = trimmedDigits.match(/.{1,4}/g); // Split the digits into groups of four
      const number = groups.join(' '); // Join the groups with a space in between, or return an empty string if there are no groups
      setNumber(number);
    } else {
      setNumber('0000 0000 0000 0000');
    }
  }

  const handleMonth = (e) => {
    setMonth(e.target.value);
  }

  const handleYear = (e) => {
    setYear(e.target.value);
  }

  const handleCvc = (e) => {
    setCvc(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  }

  const handleReset = () => {
    setName('JANE APPLESEED');
    setNumber('0000 0000 0000 0000');
    setMonth('00');
    setYear('00');
    setCvc('000');
    setSubmitted(false);
  }


  

  return (
    <div className="app">
      <div className="left">
        <Front name={name} number={number} month={month} year={year}/>
        <Back cvc={cvc}/>
      </div>
      <div className="right">
        {!submitted && <Form handleName={handleName} handleNumber={handleNumber} handleMonth={handleMonth} handleYear={handleYear} handleCvc={handleCvc} handleSubmit={handleSubmit} /> }
       {submitted && <Complete handleReset={handleReset} />}
      </div>
    </div>
  );
}

export default App;
