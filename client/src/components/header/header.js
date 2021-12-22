/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { Container } from 'reactstrap';

const Header = (props) => {
  const links = props.authUser ? (
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
    </>
  );
  return (
    <header className='header'>
      <Container>
        <div className='header-wrapper'>
          <div className='header-brand'>
            <Link to='/'>LegoLise</Link>
          </div>
          <nav className='nav'>
            <ul className='nav-list'>{links}</ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
