/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import { Container } from 'reactstrap';
import AuthService from '../../services/auth-service';

const Header = ({ authUser, loginUser }) => {
  const service = new AuthService();

  const logOut = () => {
    loginUser(false);
    service.logout();
  };

  const links = !authUser ? (
    <li className='nav-item'>
      <Link to='/login'>Sign in</Link>
    </li>
  ) : (
    <>
      <li className='nav-item'>
        <Link to='/posts'>Feed</Link>
      </li>
      <li className='nav-item'>
        <Link to='/posts/add'>New post</Link>
      </li>
      <li className='nav-item'>
        <Link to='/profile'>Profile</Link>
      </li>
      <li className='nav-item'>
        <Link to='/' onClick={logOut}>
          Logout
        </Link>
      </li>
    </>
  );
  return (
    <header className='header'>
      <Container>
        <div className='header-wrapper'>
          <h1 className='header-brand'>
            <Link to='/'>LegoLise</Link>
          </h1>
          <nav className='nav'>
            <ul className='nav-list'>{links}</ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
