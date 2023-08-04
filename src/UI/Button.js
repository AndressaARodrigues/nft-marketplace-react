// ui/Button.js

import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.module.css'; // Certifique-se de criar este arquivo CSS

const Button = ({ children, onClick, className, style }) => {
  return (
    <button className={`${classes.button} ${className}`} style={style} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Button;
