import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.module.css'; 

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
