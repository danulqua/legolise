/* eslint-disable react/prop-types */
import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../../../services/auth-service';
import './login-page.scss';
import LocalStorageService from '../../../helpers/storageService';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const authService = new AuthService();

  const handlerInput = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  const onLogin = (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password
    };

    console.log(userData);

    authService.login(userData).then((data) => {
      if (!data.error) {
        props.loginUser(data);
        console.log(data);
        LocalStorageService.setToken(data.token);
        return props.history.push('/');
      }
      console.log('error occured');
    });
  };

  return (
    <div className='login-wrapper'>
      <h2>Sign in to your account</h2>
      <div className='login-inputs'>
        <form method='POST'>
          <input
            placeholder='Enter email'
            className='login'
            name='email'
            type='email'
            value={email}
            onChange={handlerInput}
            required
          ></input>
          <input
            placeholder='Enter password'
            className='password'
            name='password'
            type='password'
            value={password}
            onChange={handlerInput}
            required
          ></input>
          <button className='btn btn-primary' type='submit' onClick={onLogin}>
            Sign in
          </button>
        </form>
        <Link to='/restore_password'>Forgot a password?</Link>
        <div className='no-acc'>
          <span>No account? </span>
          <Link to='/register'>Sign up!</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
