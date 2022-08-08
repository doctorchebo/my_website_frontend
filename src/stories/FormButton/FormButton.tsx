import React from 'react';
import './formButton.css';

export interface IFormButton {
  size: 'small' | 'large';
  primary?: boolean;
  label?: string;
  onClick?: () => void;
}
export const FormButton = ({
  size = 'small',
  primary = false,
  label,
  ...props
}: IFormButton) => {
  const mode = primary ? 'custom-button--primary' : 'custom-button--secondary';
  return (
    <button
      type='button'
      className={['custom-button', `custom-button--${size}`, mode].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};
