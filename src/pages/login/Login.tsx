import { Formik } from 'formik';
import React from 'react';
import AxiosService from '../../services/AxiosService';
import Button from '../contactMe/components/Button/Button';

import FormInput from '../contactMe/components/FormInput/FormInput';
import './login.css';

const Login = () => {
  interface IErrors {
    username?: string;
    password?: string;
  }
  return (
    <div className='login-container'>
      <h1 className='title'>Login</h1>
      <Formik
        initialValues={{ username: '', password: '' }}
        validate={(values) => {
          const errors: IErrors = {};
          if (!values.username) {
            errors.username = 'Please write your username';
          } else if (!values.password) {
            errors.password = 'Please write a password';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          alert(JSON.stringify(values, null, 2));
          AxiosService.login('authentication/login/', values);
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
          <form className='login-form' onSubmit={handleSubmit}>
            <FormInput
              id='username'
              type='text'
              name='username'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
              placeholder='username'
            />
            <span className='form-error'>
              {errors.username && touched.username && errors.username}
            </span>
            <FormInput
              id='password'
              type='password'
              name='password'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder='password'
            />
            <span className='form-error'>
              {errors.password && touched.password && errors.password}
            </span>
            <Button type='submit' disabled={isSubmitting} content={'Login'} />
          </form>
        )}
      </Formik>
      <h3>Not registered? Sign up</h3>
    </div>
  );
};

export default Login;
