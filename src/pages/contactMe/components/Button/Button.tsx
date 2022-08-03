import React from 'react';
import './Button.css';
interface IFormButton {
  type: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean | undefined;
  content: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button: React.FC<IFormButton> = ({ type, disabled, content, onClick }) => {
  return (
    <button
      className='form-button'
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
