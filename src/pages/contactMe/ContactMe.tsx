import { Formik } from 'formik';
import React from 'react';
import Button from './components/Button/Button';
import FormInput from './components/FormInput/FormInput';
import './ContactMe.css';

const ContactMe = () => {
  interface IErrors {
    name?: string;
    email?: string;
  }

  return (
    <div className='contact-me-container'>
      <h1 className='title'>Contact Me</h1>
      <Formik
        initialValues={{ name: '', email: '' }}
        validate={(values) => {
          const errors: IErrors = {};
          if (!values.name) {
            errors.name = 'Please write your name';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
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
            <span className='form-error'>{errors.name && touched.name && errors.name}</span>
            <FormInput
              id='name'
              type='email'
              name='email'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder='Email'
            />
            <span className='form-error'>{errors.email && touched.email && errors.email}</span>
            <Button type='submit' disabled={isSubmitting} />
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ContactMe;
