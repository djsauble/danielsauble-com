import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ to, children }) => {
  return (
    <a href={to} className="button">
      {children}
    </a>
  );
};

Button.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;