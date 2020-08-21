import React from 'react';
import './Button.css';

const Button = props => {
  
  const clas = [
    'Button',
    props.type
  ]

  return (
    <button
      onClick={props.onClick}
      className={clas.join('  ')}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  )

}

export default Button