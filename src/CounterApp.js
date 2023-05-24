import React from "react";
import PropTypes from 'prop-types';

import { useState } from "react";

const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(value);
   
    const handleButton = ( e ) => {
        const button = e.target.innerHTML;
        if (button === 'Reset') setCounter(0);
        if (button === '+1') setCounter(counter + 1);
        if (button === '-1') setCounter(counter - 1);
    }


   return (
    <>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>

      <button onClick={handleButton}>+1</button>
      <button onClick={handleButton}>Reset</button>
      <button onClick={handleButton}>-1</button>
    </>
   );
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
};

export default CounterApp;

