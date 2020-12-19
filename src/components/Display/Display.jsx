import React from 'react'
import PropTypes from 'prop-types'

const Display = ({ displayValue }) => (
  <div className='display-container'>
    <p className="diplay-value">
      {displayValue}
    </p>
  </div>
);

Display.propTypes = { displayValue: PropTypes.string.isRequired };

export default Display;