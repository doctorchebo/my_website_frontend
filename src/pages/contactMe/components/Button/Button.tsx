import React from 'react';
import './Button.css';
interface IFormButton {
  type: 'button' | 'submit' | 'reset' | undefined;
  disabled: boolean | undefined;
}

const Button: React.FC<IFormButton> = ({ type, disabled }) => {
  return (
    <button className='form-button' type={type} disabled={disabled}>
      Send
    </button>
  );
};

export default Button;
