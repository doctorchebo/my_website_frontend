import React from 'react';
import './FormTextField.css';
interface IFormTextFieldProps {
  id: string;
  name: string;
  onChange: (e: string | React.ChangeEvent<any>) => void;
  onBlur: (e: any) => void;
  value: string;
  placeholder: string;
}
const FormTextField: React.FC<IFormTextFieldProps> = ({
  id,
  name,
  onChange,
  onBlur,
  value,
  placeholder,
}) => {
  return (
    <textarea
      className='form-text-field'
      id={id}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      placeholder={placeholder}
    ></textarea>
  );
};

export default FormTextField;
