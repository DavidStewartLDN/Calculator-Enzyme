import React from 'react';
import PropTypes from 'prop-types';

const Keypad = ({ 
  callOperator,
  numbers,
  operators,
  setOperator,
  updateDisplay,
 }) => {
    const numbersKeys = numbers.map(number => <p key={number}>{number}</p>)

    const operatorsKeys = operators.map(operator => <p key={operator}>{operator}</p>)
 
 return(
    <div classname='keypad-container'>
      <div className='numbers-container'>
        {numbersKeys}
      </div>
      <div className='operators-container'>
        {operatorsKeys}
      </div>
    </div>
  );
}

Keypad.propTypes ={
  callOperator: PropTypes.func.isRequired,
  numbers: PropTypes.array.isRequired,
  operators: PropTypes.array.isRequired,
  setOperator: PropTypes.func.isRequired,
  updateDisplay: PropTypes.func.isRequired,
}

export default Keypad