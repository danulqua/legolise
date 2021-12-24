import React, { Component, useState } from 'react';
import './profile-edit-page.scss';

const ProfileEditPage = ({ username, email, bio, gender, dateOfBirth, avatar }) => {
  const [userData, setUserData] = useState({
    username,
    email,
    bio,
    gender,
    dateOfBirth,
    avatar,
    password: '',
    passwordRepeat: ''
  });

  const handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setUserData((userData) => ({ ...userData, [name]: value }));
    console.log(userData.dateOfBirth);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { username, email, bio, gender, dateOfBirth, avatar, password, passwordRepeat } =
      userData;

    if (password !== passwordRepeat) return;

    console.log(userData);
  };

  return (
    <div className='edit-profile-wrapper'>
      <form onSubmit={handleFormSubmit}>
        <h2>Edit profile</h2>
        <div className='input-wrapper'>
          <label htmlFor='username'>Username: </label>
          <input
            id='username'
            name='username'
            type='text'
            value={userData.username}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className='input-wrapper'>
          <label htmlFor='avatar'>Avatar: </label>
          <input
            id='avatar'
            name='avatar'
            type='file'
            value={userData.avatar}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className='input-wrapper'>
          <label htmlFor='dateOfBirth'>Date of birth: </label>
          <input
            id='dateOfBirth'
            name='dateOfBirth'
            type='date'
            value={userData.dateOfBirth}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className='input-wrapper'>
          Gender:{' '}
          <label htmlFor='gender-male'>
            male{' '}
            <input
              id='gender-male'
              name='gender'
              type='radio'
              checked={userData.gender === 'male'}
              value='male'
              onChange={handleInputChange}
            ></input>
          </label>
          <label htmlFor='gender-female'>
            female{' '}
            <input
              id='gender-female'
              name='gender'
              type='radio'
              checked={userData.gender === 'female'}
              value='female'
              onChange={handleInputChange}
            ></input>
          </label>
        </div>
        <div className='input-wrapper'>
          <label htmlFor='bio'>Bio: </label>
          <textarea
            name='bio'
            id='bio'
            cols='30'
            rows='10'
            value={userData.bio}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <hr />
        <div className='input-wrapper'>
          <label htmlFor='email'>Email: </label>
          <input
            name='email'
            type='email'
            value={userData.email}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className='input-wrapper'>
          <label htmlFor='password'>Password: </label>
          <input
            id='password'
            name='password'
            type='password'
            value={userData.password}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className='input-wrapper'>
          <label htmlFor='password-repeat'>Repeat password: </label>
          <input
            id='password-repeat'
            name='passwordRepeat'
            type='password'
            value={userData.passwordRepeat}
            onChange={handleInputChange}
          ></input>
        </div>
        <button className='btn-primary btn btn-submit' type='submit'>
          Finish editing
        </button>
      </form>
    </div>
  );
};

export default ProfileEditPage;
