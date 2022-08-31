import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import Typhography from '../../components/Typography/Typhography';
import AxiosService from '../../services/AxiosService';
import { FormButton } from '../../stories/FormButton/FormButton';
import Button from './components/Button/Button';
import FormInput from './components/FormInput/FormInput';
import FormTextField from './components/FormTextField/FormTextField';
import Modal from './components/Modal/Modal';
import './styles.css';

export interface IContactMe {
  name: string;
  email: string;
  message: string;
}

const ContactMe = () => {
  interface IErrors {
    name?: string;
    email?: string;
    message?: string;
  }
  const [modal, setModal] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: -10, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className='body-container'>
      <Typhography content='Contact Me' size={2} color='#006699' type='title'/>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validate={(values) => {
          const errors: IErrors = {};
          if (!values.name) {
            errors.name = 'Please write your name';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          } else if (!values.message) {
            errors.message = 'Please write a message';
          }
          return errors;
        }}
        onSubmit={(values: IContactMe, { setSubmitting }) => {
          alert(JSON.stringify(values, null, 2));
          setModal(true);
          AxiosService.contactMe(values);
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form className='contact-form' onSubmit={handleSubmit}>
            <FormInput
              id='name'
              type='text'
              name='name'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              placeholder='Name'
            />
            <span className='form-error'>
              {errors.name && touched.name && errors.name}
            </span>
            <FormInput
              id='name'
              type='email'
              name='email'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder='Email'
            />
            <span className='form-error'>
              {errors.email && touched.email && errors.email}
            </span>
            <FormTextField
              id='message'
              name='message'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
              placeholder='Write me a message'
            />
            <span className='form-error'>
              {errors.message && touched.message && errors.message}
            </span>
            <Button type='submit' disabled={isSubmitting} content={'Send'} />
          </form>
        )}
      </Formik>
      {modal && <Modal modal={modal} closeModal={setModal} />}
    </div>
  );
};

export default ContactMe;
