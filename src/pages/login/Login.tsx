import { Formik } from 'formik';
import React from 'react';
import { useAuthStore } from '../../application/store/Reducers/AuthReducer/useAuthStore';
import Typhography from '../../components/Typography/Typhography';
import Button from '../contactMe/components/Button/Button';
import FormInput from '../contactMe/components/FormInput/FormInput';
import './login.css';

export interface ICredentials {
  email: string;
  password: string;
}

const Login = () => {
  const { onLogin } = useAuthStore();
  interface IErrors {
    email?: string;
    password?: string;
  }
  return (
    <div className='body-container'>
      <Typhography  content={'Login'} size='large-bold' color={'#006699'} />
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          const errors: IErrors = {};
          if (!values.email) {
            errors.email = 'Please write your email';
          } else if (!values.password) {
            errors.password = 'Please write a password';
          }
          return errors;
        }}
        onSubmit={(values: ICredentials, { setSubmitting }) => {
          alert(JSON.stringify(values, null, 2));
          onLogin(values);
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
              id='email'
              type='text'
              name='email'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder='email'
            />
            <span className='form-error'>
              {errors.email && touched.email && errors.email}
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
