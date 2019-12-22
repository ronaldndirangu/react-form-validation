import React from 'react';
import './index.scss';
import { useForm } from '../../hooks/useForm';
import { validateRegister } from '../../validators/validateRegister';

const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  confirm: ''
};

const Register = () => {
  const {
    values,
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    isSubmitting
  } = useForm(onSubmit, initialState, validateRegister);

  function onSubmit () {
    console.log('Submitted');
  }

  return (
    <div className='register'>
      <h1>Sign up</h1>
      <form className='register-form' onSubmit={handleSubmit}>
        <input
          className='register-form__input'
          name='firstname'
          type='text'
          onBlur={handleBlur}
          value={values.firstname}
          placeholder='Firstname'
          onChange={handleChange}
        />
        {errors.firstname && <p className='error-text'>{errors.firstname}</p>}
        <input
          className='register-form__input'
          name='lastname'
          type='text'
          onBlur={handleBlur}
          value={values.lastname}
          placeholder='Lastname'
          onChange={handleChange}
        />
        {errors.lastname && <p className='error-text'>{errors.lastname}</p>}
        <input
          className='register-form__input'
          name='email'
          type='email'
          onBlur={handleBlur}
          value={values.email}
          placeholder='Email'
          onChange={handleChange}
        />
        {errors.email && <p className='error-text'>{errors.email}</p>}
        <input
          className='register-form__input'
          name='password'
          type='password'
          onBlur={handleBlur}
          value={values.password}
          placeholder='Password'
          onChange={handleChange}
        />
        {errors.password && <p className='error-text'>{errors.password}</p>}
        <input
          className='register-form__input'
          name='confirm'
          type='password'
          onBlur={handleBlur}
          value={values.confirm}
          placeholder='Confirm Password'
          onChange={handleChange}
        />
        {errors.confirm && <p className='error-text'>{errors.confirm}</p>}
        <button disabled={isSubmitting} className='register-form__btn' type='sumbit'>Submit</button>
      </form>
    </div>
  );
};

export default Register;
