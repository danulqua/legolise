/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import AuthService from '../../../services/auth-service';
import './sign-up-menu.scss';

const SignUpMenu = (props) => {
  const [state, setState] = useState({
    username: '',
    gender: 'f',
    email: '',
    dateOfBirth: '',
    password: ''
  });
  const [error, setError] = useState(null);
  const authService = new AuthService();

  const handlerInput = (event) => {
    const { name, value } = event.target;
    setState((state) => ({
      ...state,
      [name]: value
    }));
  };

  const onRegister = (e) => {
    e.preventDefault();
    console.log(state);
    authService.register(state).then((data) => {
      if (!data.error) {
        return props.history.push('/login');
      }
      setError(data.error);
    });
  };

  return (
    <div className='sign-up-menu'>
      <div className='sign-up-menu-container'>
        <div className='title'>
          <h2>Create new account</h2>
        </div>
        <hr />
        <form method='POST'>
          <div className='username-input post-input-block'>
            <h4>Your username</h4>
            <input
              name='username'
              placeholder='Enter your username'
              type='text'
              value={state.username}
              onChange={handlerInput}
              required
            ></input>
          </div>
          <div className='choose-gender post-input-block'>
            <h4>Your sex</h4>
            <div className='form-radio'>
              <input
                type='radio'
                id='gender-type-1'
                name='gender'
                value='f'
                onChange={handlerInput}
                defaultChecked
              />
              <label htmlFor='gender-type-1'>Female</label>
            </div>
            <div className='form-radio '>
              <input
                type='radio'
                id='gender-type-2'
                name='gender'
                value='m'
                onChange={handlerInput}
              />
              <label htmlFor='gender-type-2'>Male</label>
            </div>
          </div>
          <div className='post-input-block'>
            <h4>Email</h4>
            <input
              className='email-input'
              name='email'
              placeholder='Enter your email'
              type='email'
              value={state.email}
              onChange={handlerInput}
              required
            ></input>
          </div>
          <div className='post-input-block'>
            <h4>Date of birth</h4>
            <input
              className='date-of-birth-input'
              name='dateOfBirth'
              placeholder='Enter your date of birth'
              type='date'
              value={state.dateOfBirth}
              onChange={handlerInput}
              required
            ></input>
          </div>
          <div className='post-input-block'>
            <h4>Password</h4>
            <input
              className='password-input'
              name='password'
              placeholder='Enter your password'
              type='password'
              value={state.password}
              onChange={handlerInput}
              required
            ></input>
          </div>
          <div className='submit-btn'>
            <button className='btn-primary btn' type='submit' onClick={onRegister}>
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpMenu;
