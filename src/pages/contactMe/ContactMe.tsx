import { Formik } from 'formik';
import React from 'react';
import FormInput from './components/FormInput/FormInput';

const ContactMe = () => {
  interface IErrors {
    name?: string;
    email?: string;
  }
  return (
    <div className='contact-me-container'>
      <h1>Contact Me</h1>
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
          <form onSubmit={handleSubmit}>
            <input
              id='name'
              type='text'
              name='name'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              placeholder='Name'
            />
            {errors.name && touched.name && errors.name}
            <input
            id='name'
              type='email'
              name='email'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder='Email'
            />
            {errors.email && touched.email && errors.email}
            <button type='submit' disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ContactMe;
