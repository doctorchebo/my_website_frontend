import React from 'react';
import './FormInput.css';
interface IInputProps {
  id: string;
  type: string;
  name: string;
  onChange: (e: string | React.ChangeEvent<any>) => void;
  onBlur: (e: any) => void;
  value: string;
  placeholder: string;
}
const FormInput: React.FC<IInputProps> = ({
  id,
  type,
  name,
  onChange,
  onBlur,
  value,
  placeholder,
}) => {
  return (
    <input
      className='form-input'
      id={id}
      type={type}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      placeholder={placeholder}
    ></input>
  );
};

export default FormInput;
