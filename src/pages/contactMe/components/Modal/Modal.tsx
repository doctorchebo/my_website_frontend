import React from 'react';
import locale from '../../locale/en.json';
import Button from '../Button/Button';
import './modal.css';

interface IModal {
  modal: boolean;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ modal, closeModal }: IModal) => {
  const { message } = locale;
  return (
    <div className='modal'>
      <div className='overlay' onClick={() => closeModal(false)}></div>
      <div className='modal-content'>
        <p className='modal-message'>{message}</p>
        <div className='btn-container'>
          <Button
            type='button'
            content={'close'}
            onClick={() => closeModal(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
